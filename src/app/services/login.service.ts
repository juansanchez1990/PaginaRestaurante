
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../interfaces/user';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public auth: AngularFireAuth) { 

    
  }


}
