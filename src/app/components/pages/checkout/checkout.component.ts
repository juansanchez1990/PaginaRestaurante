import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { GenerarPedidoService } from '../../../services/generar-pedido.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  Nombre = new FormControl('', [Validators.minLength(2), Validators.required]);
  Apellidos = new FormControl('', [Validators.minLength(2), Validators.required]);
  Direccion1 = new FormControl('', [Validators.required]);
  Direccion2 = new FormControl('');
  FechaPedido = new FormControl('', [Validators.required]);
  Celular = new FormControl('', [Validators.minLength(8), Validators.maxLength(8), Validators.required, Validators.pattern("^[0-9]*$")]);
  Email = new FormControl('', [Validators.email, Validators.required]);
  Comentario = new FormControl();
  RegistroPedido: FormGroup;
  TotalGeneral: number= 0;
  SubtotalGeneral: number= 0;
  Items = [];
  Envio = 0;
  IdPedido: any;
  NumeroPedido: any;
  constructor(private shopCart: ShoppingCartService, private GenerarPedido: GenerarPedidoService) { }

  ngOnInit() {
    this.getItems();
    this.RegistroPedido = new FormGroup({
      Nombre: this.Nombre,
      Apellidos: this.Apellidos,
      Direccion1: this.Direccion1,
      Direccion2: this.Direccion2,
      Celular: this.Celular,
      Email: this.Email,
      FechaPedido: this.FechaPedido,
      Comentario: this.Comentario,
    });

    
  }

    getItems(){
    this.shopCart.ItemAComprar.subscribe(data=>{
      
      this.Items = data;
      

     console.log('esta es la data',data);
this.CalcularTotal();
this.CalcularSubTotal();
    })
//   let Productos=  JSON.parse(localStorage.getItem('ShopCart'))
//   this.Items = Productos
  
//   console.log('datos', this.Items);
// return this.Items
  }

  CalcularTotal(){
    
  this.TotalGeneral = 0;
  if (this.Items.length > 0) {

    this.Items.forEach(item => {
      this.SubtotalGeneral = this.SubtotalGeneral + item.Subtotal;
      this.TotalGeneral = this.TotalGeneral + item.Subtotal;
    });

    this.TotalGeneral = (this.TotalGeneral * 1.15 ) + this.Envio;
  }
}

CalcularSubTotal(){
    
 let Subtotal = 0;
  if (this.Items.length > 0) {

    this.Items.forEach(item => {
      Subtotal = Subtotal + item.Subtotal;
    });
this.SubtotalGeneral = Subtotal;
  }
}

  delete(Item){

    this.shopCart.delete(Item);
    
    }

    RegistrarPedido(){
      if (this.RegistroPedido.valid){

this.GenerarPedido.registrarPedido(this.RegistroPedido.value, this.Items, this.TotalGeneral).then(()=>{
  this.RegistroPedido.reset();
  this.GenerarPedido.borrarItems();
}


)

      }
    }

    sendForm(form){
      this.GenerarPedido.sendMessage(form).subscribe(()=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Añadiste a tu carrito de compras`,
          showConfirmButton: false,
          timer: 1500
        })
          
      }); 


    }
}
