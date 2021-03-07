import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GenerarPedidoService {

  constructor(private afs: AngularFirestore) { }

  registrarPedido(nuevoRegistro, Productos, Fecha) {
    var id = this.afs.createId();
    return this.afs.collection("registroPedidos").doc(id).ref.set(Object.assign(nuevoRegistro, Productos,Fecha, { id: id }));

   
  }
  borrarItems(){
    localStorage.removeItem('ShopCart');
  }
}
