import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() product: Products;
  counterValue = 1;
  selectedSize = null;

  constructor() { }

  ngOnInit(): void {
    this.selectedSize = this.product.Size[0].Size;
  }


  selectSize(event) {
    console.log(event)
  }

  sumProductos() {
    this.counterValue = this.counterValue + 1;
  }

  restarProducto() {
    if (this.counterValue - 1 < 0) {
      this.counterValue = 0;
    }
    else {
      this.counterValue = this.counterValue - 1;
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
