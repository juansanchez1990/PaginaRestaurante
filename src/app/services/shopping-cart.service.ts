import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { BehaviorSubject, Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {
 

  public ItemAComprar = new BehaviorSubject([]);
  constructor() { 

    let items = localStorage.getItem('ShopCart');
    if (items){
      this.ItemAComprar.next(JSON.parse(items));
      console.log('items',items);
    }
  }



addShoppingCart (Item){
  let temp = this.ItemAComprar.getValue();
temp.push(Item);
this.ItemAComprar.next(temp);
  
localStorage.setItem('ShopCart',JSON.stringify(temp))






}

guardarLocal(){
   
}
}

