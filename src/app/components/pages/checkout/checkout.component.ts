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
  Direccion2 = new FormControl('', [Validators.required]);
  currentDate: number = Date.now();
  Celular = new FormControl('', [Validators.minLength(8), Validators.maxLength(8), Validators.required, Validators.pattern("^[0-9]*$")]);
  Email = new FormControl('', [Validators.email, Validators.required]);
  Comentario = new FormControl();
  RegistroPedido: FormGroup;

  Items = [];
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
      Comentario: this.Comentario,
      PedidoProcesado: new FormControl(false)
    });
  }

    getItems(){
    this.shopCart.ItemAComprar.subscribe(data=>{
      
      this.Items = data;
     console.log('esta es la data',data);

    })
//   let Productos=  JSON.parse(localStorage.getItem('ShopCart'))
//   this.Items = Productos
  
//   console.log('datos', this.Items);
// return this.Items
  }

  delete(Item){

    this.shopCart.delete(Item);
    
    }

    RegistrarPedido(){
      if (this.RegistroPedido.valid){
this.GenerarPedido.registrarPedido(this.RegistroPedido.value, this.Items, this.currentDate).then(()=>{
  this.RegistroPedido.reset();
  this.GenerarPedido.borrarItems();
}

)
      }
    }
}
