import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private firestore: AngularFirestore) { }

  updateUserInfo(user: User) {
    return this.firestore.collection('users').doc(user.uid).update(user);
  }

  isPerfilOK() {
    // let user = this.tokenService.getJsonValue('user');

    // if (user.displayName !== null && user.NoCedula !== null && user.NoCelular !== null && user.SupermercadoPrefencial !== null && user.Direccion !== null) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

}
