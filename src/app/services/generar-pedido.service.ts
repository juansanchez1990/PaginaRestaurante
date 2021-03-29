import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GenerarPedidoService {
  InfoPedido: any;

  constructor(private afs: AngularFirestore, private _http: HttpClient) { 

    this.InfoPedido= localStorage.getItem('PedidosPendientes');
    if (this.InfoPedido){
      this.DetallePedido.next(JSON.parse( this.InfoPedido));
      
    }
    this.getPedidos();
    this.getNumeroPedido();
  }
 DetallePedido = new BehaviorSubject([]);
 ListadoPedidos = new BehaviorSubject([]);
 NumeroPedidos = new BehaviorSubject([]);
 IdPedido: any;
  registrarPedido(nuevoRegistro, Productos, Total) {
    


   
   
        var id = this.afs.createId();
        let pedido = {
          id: id,
          items: Productos,
          Total,
          infoCliente: nuevoRegistro,
          PedidoProcesado: false
        }
        return this.afs.collection("registroPedidos").doc(id).ref.set(pedido);

   
  }

  getPedidos() {
    this.afs.collection("registroPedidos", ref => ref.where('PedidoProcesado', '==', false)).valueChanges().subscribe(data => {
   
      this.ListadoPedidos.next(data);
    })
  }
  sendMessage(body) {
    return this._http.post('http://localhost:3000/formulario', body);
  }

  borrarItems(){
    localStorage.removeItem('ShopCart');
  }

  actualizar(registroPedido) {
    return this.afs.collection("registroPedidos").doc(registroPedido.id).ref.update(registroPedido);
   }

   SendDetailPedido(pedido, IdPedido){

    this.DetallePedido.next(pedido);
    this.IdPedido.next(IdPedido);
    localStorage.setItem('PedidosPendientes',JSON.stringify(pedido, IdPedido))

   }
   getNumeroPedido(){
    this.afs.collection("ContadorPedidos").valueChanges().subscribe(data => {
      this.NumeroPedidos.next(data);
    })
   }
 
}
