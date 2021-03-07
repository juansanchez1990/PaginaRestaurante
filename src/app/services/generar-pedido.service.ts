import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GenerarPedidoService {

  constructor(private afs: AngularFirestore) { 
    this.getPedidos();
  }
 ListadoPedidos = new BehaviorSubject([]);
  registrarPedido(nuevoRegistro, Productos) {
    var id = this.afs.createId();
    return this.afs.collection("registroPedidos").doc(id).ref.set(Object.assign(nuevoRegistro, Productos, { id: id }));

   
  }

  getPedidos() {
    this.afs.collection("registroPedidos", ref => ref.where('PedidoProcesado', '==', false)).valueChanges().subscribe(data => {
      this.ListadoPedidos.next(data);
    })
  }

  borrarItems(){
    localStorage.removeItem('ShopCart');
  }

  actualizar(registroPedido) {
    return this.afs.collection("registroPedidos").doc(registroPedido.id).ref.update(registroPedido);
   }
 
}
