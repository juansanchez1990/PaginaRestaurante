import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { BehaviorSubject, Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {
 

  public ItemAComprar = new BehaviorSubject([]);
  public itemLocalStorage : any;
  constructor() { 

    this.itemLocalStorage= localStorage.getItem('ShopCart');
    if (this.itemLocalStorage){
      this.ItemAComprar.next(JSON.parse( this.itemLocalStorage));
      
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

