import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {
  public Item$ = new BehaviorSubject<Products>(null);
  Items:any;
  constructor() { }

getItems(products: Products){
this.Items = products;
this.Item$.next(this.Items);
}

sendItems(){
  this.Item$.next(this.Items);
}



}
