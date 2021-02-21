import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { BehaviorSubject, Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {
 
  private ItemAComprar = [];
  public itemAComprarNuevo = new BehaviorSubject<any>(this.ItemAComprar);
  constructor() { }

// getItems(products: Object){
// this.Items = products;
// this.Item$.next(this.Items);
// }

// sendItems(){
//   this.Item$.next(this.Items);
// }

addShoppingCart (Item){

  this.ItemAComprar.push(Item);
  this.itemAComprarNuevo.next(this.ItemAComprar);



  // if(localStorage.getItem("list")){
  //   let ArrayList  = JSON.parse(localStorage.getItem("list"))
  //   ArrayList.push(Item); 
  //   localStorage.setItem("list", JSON.stringify(ArrayList));
  //   Swal.fire({
  //     position: 'center',
  //     icon: 'success',
  //     title: 'Te esperamos pronto',
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  // }

  // else {

  //   let ArrayList = [];
  //   ArrayList.push(Item);
  //   localStorage.setItem("list", JSON.stringify(ArrayList));
  //   Swal.fire({
  //     position: 'center',
  //     icon: 'success',
  //     title: 'Te esperamos pronto',
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  // }




}

}

