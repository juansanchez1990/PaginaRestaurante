import { Component, OnInit } from '@angular/core';
import { GenerarPedidoService } from '../../services/generar-pedido.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 PedidosInfo= null ;

  constructor( public Pedidos: GenerarPedidoService) { }

  ngOnInit() {
   this.Pedidos.ListadoPedidos.subscribe(data=>{
     this.PedidosInfo =data;
   
   })
  }

  enviarPedido(pedido){
    this.Pedidos.SendDetailPedido(pedido);
  }
  Actualizar(item){
 

    Swal.fire({
      title: `Ya procesó el pedido de ${item.infoCliente.Nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'No, aun no',
      confirmButtonText: 'Si, ya fue procesado'
    }).then((result) => {
      if (result.isConfirmed) {
        item.PedidoProcesado= true;
        this.Pedidos.actualizar(item);
        Swal.fire(
          'Hecho',
          'El pedido ya fue procesado',
          'success'
        )
      }
    })

  }
}
