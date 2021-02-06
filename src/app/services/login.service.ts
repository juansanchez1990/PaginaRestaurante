
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import Swal from 'sweetalert2'

import { ToastrService } from 'ngx-toastr';

import { first } from 'rxjs/operators';
import firebase from 'firebase/app'
// import { auth } from 'firebase/app';
import {
  AngularFirestore, AngularFirestoreDocument,

} from '@angular/fire/firestore';
import { User } from '../interfaces/user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userData$ = new BehaviorSubject<User>(null);
  public isSessionActive$ = new BehaviorSubject<boolean>(false);
  public isEmailVerifield$ = new BehaviorSubject<boolean>(false);


  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private ngZone: NgZone, // NgZone service to remove outside scope warning
  ) {
    this.afAuth.authState.subscribe(async (user) => {
      if (user) {
        if (user.emailVerified === false) {
          this.isEmailVerifield$.next(false);
          this.startSession(user);
          this.router.navigateByUrl('VerificarCorreo'); // componente de verificar
        } else {
          this.isEmailVerifield$.next(true);
          this.startSession(user);
          this.router.navigateByUrl(''); // poner nombre de ruta princila
        }
      }

    })
  }

  async startSession(user) {
    await this.getUserInfo(user.uid);
    this.isSessionActive$.next(true);
  }

  getUserInfo(userUid) {
    return this.afs.collection<User>('users').doc(userUid).valueChanges().pipe(first()).toPromise().then(userData => {
      if (userData) {
        this.userData$.next(userData);
      }
    });
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.signOut().then(() => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.toastr.success('Bienvenido a tu supermercado');
          this.SetUserData(result.user);
        }).catch((error) => {
          this.toastr.error('Credenciales Incorrectas', 'Error');
        })
    });

  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(async () => {
        await this.SendVerificationMail();
      }).catch((error) => {
        this.toastr.error(error.message, 'Error');
      })
  }

  // Send email verfificaiton when new user sign up
  async SendVerificationMail() {
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.toastr.success('Se le mando un enlace por correo para cambiar su contraseña.');
      }).catch((error) => {
        this.toastr.error(error, 'Error');
      })
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  FacebookAuth() {
    return this.AuthLogin(new firebase.auth.FacebookAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result: any) => {
        this.ngZone.run(() => {
          this.toastr.success('Bienvenido a tu supermercado');
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        //hacer algo en error
      });
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    this.afs.collection('users').doc(user.uid).valueChanges().pipe(first()).subscribe((data: User) => {
      let userData: User;
      if (data === null || data === undefined) {
        userData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
          Direcciones: [],
          NoCedula: null,
          NoTelefono: null
        };
        return userRef.set(userData, {
          merge: true
        });
      }
    });

  }

  // Sign out 
  SignOut() {
    return this.afAuth.signOut().then(() => {
      this.toastr.success('Te esperamos pronto');
      this.router.navigateByUrl(''); // cambiar a donde se quiere ir despues de login
      this.isSessionActive$.next(false);
      this.userData$.next(null);
    });
  }


}
