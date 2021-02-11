import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() product: Products;
  public counter : number = 0;
  selectedSize = null;

  constructor() { }

  ngOnInit(): void {
    this.selectedSize = this.product.Size[0].Size;
  }


  selectSize(event) {
    console.log(event)
  }

  sumProductos() {
    this.counter += 1;
  }

  restarProducto() {
    if (this.counter  <=  0) {
      this.counter = 0;
    }
    else {
      this.counter = this.counter - 1;
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

}
