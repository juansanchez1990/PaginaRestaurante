import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { GenerarPedidoService } from '../../../services/generar-pedido.service';

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
  Subtotal: number= 0;
  Items = [];
  Envio = 0;

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
    })
//   let Productos=  JSON.parse(localStorage.getItem('ShopCart'))
//   this.Items = Productos
  
//   console.log('datos', this.Items);
// return this.Items
  }

  CalcularTotal(){
    
    this.Subtotal = 0;
  this.TotalGeneral = 0;
  if (this.Items.length > 0) {

    this.Items.forEach(item => {
      this.Subtotal = this.Subtotal + item.Subtotal;
    });

    this.TotalGeneral = (this.Subtotal * 1.15 ) + this.Envio;
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
}
