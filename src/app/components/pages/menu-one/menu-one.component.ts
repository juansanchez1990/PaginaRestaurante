import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../../services/departamentos-service.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-menu-one',
  templateUrl: './menu-one.component.html',
  styleUrls: ['./menu-one.component.css']
})
export class MenuOneComponent implements OnInit {
Departamentos= this.DepartamentosService.Departamentos
  constructor(private DepartamentosService: DepartamentosService, private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }


}
