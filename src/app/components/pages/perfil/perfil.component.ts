import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public collapses: string[]= ["direccion"];

  constructor() { }
  agregarCollapse (){
    this.collapses.push("direccion");

}
  ngOnInit(): void {
  }

}
