
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import Swal from 'sweetalert2'


import { first } from 'rxjs/operators';
import firebase from 'firebase/app'
// import { auth } from 'firebase/app';
import {
  AngularFirestore,

} from '@angular/fire/firestore';
import { User } from '../interfaces/user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
public user: User;
  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) { 

    
  }

async loginGoogle(){
  try{
    this.afAuth.signInWithPopup(  new firebase.auth.GoogleAuthProvider())

  }
  catch(error){console.log(error);}
}


async Login(email: string, password: string){
  try{
    const result= await this.afAuth.signInWithEmailAndPassword(email, password);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bienvenido' ,
      showConfirmButton: false,
      timer: 1500
    })
    return result;
  
    
  }
  catch(error){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Datos Incorrectos',
   
    })
  }
}
async register(email: string, password: string){
  try{
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    return result;

  }
  catch(error){
console.log(error);
  }
}

async logout(){
  try{

    await this.afAuth.signOut();
  }
  catch(error){
    console.log(error);

  }
}

async resetPassword(email: string): Promise<void> {
  try {
    return this.afAuth.sendPasswordResetEmail(email);
  } catch (error) {
    console.log(error);
  }
}

getCurrentUser(){
return this.afAuth.authState.pipe(first()).toPromise();
}

}
