import { Component, OnInit } from '@angular/core';
import { GenerarPedidoService } from '../../services/generar-pedido.service';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {
ListaPedidos :any ;
  constructor( public Pedido: GenerarPedidoService) { }

  ngOnInit() {
    this.Pedido.DetallePedido.subscribe(data=>{
      this.ListaPedidos = data;
    })
 
  }

}
