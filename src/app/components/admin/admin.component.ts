import { Component, OnInit } from '@angular/core';
import { GenerarPedidoService } from '../../services/generar-pedido.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 PedidosInfo: any;

  constructor( public Pedidos: GenerarPedidoService) { }

  ngOnInit() {
   this.Pedidos.ListadoPedidos.subscribe(data=>{
     this.PedidosInfo =data;
   
   })
  }

}
