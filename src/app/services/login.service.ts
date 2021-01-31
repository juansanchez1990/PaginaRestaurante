import { User } from '../interfaces/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user$: Observable<User>;
  constructor(public auth: AngularFireAuth) { 

    
  }


}
