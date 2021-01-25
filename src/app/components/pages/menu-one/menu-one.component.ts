import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../../services/departamentos-service.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { ProductsService } from '../../../services/products.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-menu-one',
  templateUrl: './menu-one.component.html',
  styleUrls: ['./menu-one.component.css']
})
export class MenuOneComponent implements OnInit {
Departamentos= this.DepartamentosService.Departamentos;
Productos= this.products.Productos;
  constructor(private DepartamentosService: DepartamentosService, private storage: AngularFireStorage, private products: ProductsService) { }

  ngOnInit(): void {
    console.log("Productos",this.Departamentos ) ;
  }


}
