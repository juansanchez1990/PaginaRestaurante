import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../../services/departamentos-service.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { ProductsService } from '../../../services/products.service';
import { async } from '@angular/core/testing';
import { Products } from 'src/app/interfaces/products';

@Component({
  selector: 'app-menu-one',
  templateUrl: './menu-one.component.html',
  styleUrls: ['./menu-one.component.css']
})
export class MenuOneComponent implements OnInit {
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
      console.log(data);
    
    
    });
  }
  sumProductos(precio: number){

  }

  obtenerProducto(productos: Products){
this.productos = productos
console.log('Este es el producto',this.productos);
  }
    
}
