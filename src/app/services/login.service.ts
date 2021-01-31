
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable, of } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import { auth } from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { User } from '../interfaces/user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
public user: User;
  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) { 

    
  }
async Login(email: string, password: string){
  try{
    const result= await this.afAuth.signInWithEmailAndPassword(email, password);
  return result;
    
  }
  catch(error){
console.log(error);
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
getCurrentUser(){
return this.afAuth.authState.pipe(first()).toPromise();
}
}
