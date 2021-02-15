import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() product: Products;
  public counter : number = 0;
  selectedSize = null;
  hayCantidad : boolean =false

  constructor(private shopCart: ShoppingCartService) { }

  ngOnInit(): void {

    this.selectedSize = this.product.Size[0].Size;
    if( this.counter === 0){
      this.hayCantidad  =false
    }
  }


  selectSize(event) {
    console.log(event)
  }

  sumProductos() {
    this.counter += 1;
    this.hayCantidad= true;
  }

  restarProducto() {
    this.counter = this.counter - 1;
    if (this.counter  ===  0) {
   
      this.hayCantidad= false;
    }
   

 
  }

  


  getPrice() {
    return this.product.Size.find(i => i.Size === this.selectedSize);
  }

  aggToCart(traerProducto: Products) {
    // this.productos = traerProducto
    // if (this.counterValue > 0) {
    //   let ProductosListo = {
    //     "ProductoItem": traerProducto,
    //     "CantidadOrdenada": this.counterValue
    //   }
    //   console.log('Este es el producto', this.productos);
    //   this.counterValue = 1;
    // this.SumarCarrito.emit(ProductosListo);

  }

  traerProducto(Items){
    this.shopCart.getItems(Items);
  }

}
