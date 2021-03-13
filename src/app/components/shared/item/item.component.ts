import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() product: Products;
  public counter: number = 0;
  selectedSize = null;
  hayCantidad: boolean = false
  SubTotal = 0;
  Envio = 0;
  TotalGeneral = 0;
Items: any;
  constructor(private shopCart: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    this.selectedSize = this.product.Size[0].Size;
    if (this.counter === 0) {
      this.hayCantidad = false
    }
  }


  selectSize(event) {
    console.log(event)
  }

  sumProductos() {
    this.counter += 1;
    this.hayCantidad = true;
  }

  restarProducto() {
    this.counter = this.counter - 1;
    if (this.counter === 0) {

      this.hayCantidad = false;
    }



  }




  getPrice() {
    return this.product.Size.find(i => i.Size === this.selectedSize);
  }

 
  

  traerProducto(Items) {
// let url= this.router.url;
let counter = this.counter

let Item={
  items : Items,
  Size: this.getPrice(),
  counter,
  Subtotal : this.getPrice().Precio * this.counter
  
  
}
this.shopCart.addShoppingCart(Item);
this.Items = Item;
  }


 

}
