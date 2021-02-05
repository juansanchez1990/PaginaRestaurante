
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import Swal from 'sweetalert2'

import { ToastrService } from 'ngx-toastr';

import { first } from 'rxjs/operators';
import firebase from 'firebase/app'
// import { auth } from 'firebase/app';
import {
  AngularFirestore,

} from '@angular/fire/firestore';
import { User } from '../interfaces/user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user: User;
  public IsLogged = new BehaviorSubject(false);
  public userInfo = new BehaviorSubject(null);
  public router: Router
  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private toastr: ToastrService,) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.IsLogged.next(true);
        this.userInfo.next(user);
      }
    });
  }

  async loginGoogle() {
    try {
      this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenido, click en Ok para continuar   ', 
        showConfirmButton: true,
        
      });
    }
    catch (error) { console.log(error); }
  }


  async Login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenido   ',
        showConfirmButton: false,
        timer: 1500
      });
      return result;


    }
    catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos Incorrectos',

      })
    }
  }
  async register(email: string, password: string) {
    try {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro Exitoso   ',
        showConfirmButton: false,
        timer: 1500
      });
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
      

    }
    catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Al parecer este correo ya esta registrado, inténtalo nuevamente',

      })
      this.router.navigate(['/login'])
    }
  }

  async logout() {
    try {
      this.IsLogged.next(false);
      await this.afAuth.signOut();
    }
    catch (error) {
   

    }
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

}
