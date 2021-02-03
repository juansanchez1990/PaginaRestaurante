import { Component, OnInit, Output } from '@angular/core';
import { DepartamentosService } from '../../../services/departamentos-service.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { ProductsService } from '../../../services/products.service';
import { async } from '@angular/core/testing';
import { Products } from 'src/app/interfaces/products';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-menu-one',
  templateUrl: './menu-one.component.html',
  styleUrls: ['./menu-one.component.css']
})
export class MenuOneComponent implements OnInit {
  @Output() SumarCarrito = new EventEmitter();
  counterValue =1;
  Departamentos = this.DepartamentosService.Departamentos;
  Productos: Products[];
  MostrarBebidasCalientes: boolean;
  MostrarBebidasFrias: boolean;
  MostrarDesayunos: boolean;
  MostrarComidas: boolean;
  MostrarPostres: boolean;
  idCart: number;
  productos: any;
  constructor(private DepartamentosService: DepartamentosService, private products: ProductsService) { }

  ngOnInit(): void {
    this.getProductos();
  }



  getProductos() {
    this.products.productos.subscribe(data => {
      this.Productos = data;
    
    
    
    });
  }
  sumProductos(){

this.counterValue = this.counterValue + 1;
  }

  restarProducto(){
    if (this.counterValue - 1 <0){
      this.counterValue = 0;
    }
    else{
      this.counterValue = this.counterValue -1;
    }
  }

  aggToCart(traerProducto: Products){
  this.productos = traerProducto
    if (this.counterValue>0){
    let ProductosListo= {
      "ProductoItem":traerProducto,
      "CantidadOrdenada": this.counterValue
    }
    console.log('Este es el producto',this.productos);
    this.counterValue = 1;
    this.SumarCarrito.emit(ProductosListo);
  }
}


    
}
