import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { BehaviorSubject, Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {
 

  public ItemAComprar = new BehaviorSubject([]);
  constructor() { }



addShoppingCart (Item){
  let temp = this.ItemAComprar.getValue();
temp.push(Item);
this.ItemAComprar.next(temp);
  



 



}

}

