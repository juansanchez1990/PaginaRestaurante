import { Component, OnInit, Output } from '@angular/core';
import { DepartamentosService } from '../../../services/departamentos-service.service';
import { ProductsService } from '../../../services/products.service';
import { Products } from 'src/app/interfaces/products';
import { EventEmitter } from 'events';
import { Departamentos } from 'src/app/interfaces/departamentos';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-menu-one',
  templateUrl: './menu-one.component.html',
  styleUrls: ['./menu-one.component.css']
})
export class MenuOneComponent implements OnInit {
  @Output() SumarCarrito = new EventEmitter();
  counterValue = 1;
  Departamentos;
  Productos: Products[];
  idCart: number;
  productos: any;
  departamentoSeleccionado: Departamentos;

  constructor(private DepartamentosService: DepartamentosService, private products: ProductsService) { }

  ngOnInit(): void {
    this.getDepartamentos();
  }

  getDepartamentos() {
    this.DepartamentosService.Departamentos.subscribe(data => {
      this.Departamentos = data;
      this.departamentoSeleccionado = data[0];
      this.getProductos();

    })
  }

  getProductos() {
    this.products.productos.subscribe(data => {
      this.Productos = data;
      this.getProductosPorDepartamento();
    });
  }

  getProductosPorDepartamento(): Products[] {
    if (this.departamentoSeleccionado) {
      return this.Productos.filter(i => i.DepartamentoId === this.departamentoSeleccionado.Id);
    } else {
      return [];
    }

  }


  seleccionarDepartamento(departamento) {
    this.departamentoSeleccionado = departamento;
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

  selectSize(size){
    console.log(size)
  }

  aggToCart(traerProducto: Products) {
    this.productos = traerProducto
    if (this.counterValue > 0) {
      let ProductosListo = {
        "ProductoItem": traerProducto,
        "CantidadOrdenada": this.counterValue
      }
      console.log('Este es el producto', this.productos);
      this.counterValue = 1;
      // this.SumarCarrito.emit(ProductosListo);
    }
  }



}
