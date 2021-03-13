import { Component, OnInit, Input, AfterViewInit} from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, AfterViewInit {
ProductosCart: Array<Products>;
Items = [];
SubTotal = 0;
Envio = 0;
TotalGeneral = 0;
selectedSize = null;
Total: number= 0;
Subtotal: number= 0;
  constructor(private shopCart: ShoppingCartService) { }

  ngOnInit()  {
    this.getItems();
    // this.Total = this.Subtotal * 1.15;

  }
ngAfterViewInit(){
 
}
delete(Item){

this.shopCart.delete(Item);


}
  getItems(){
    this.shopCart.ItemAComprar.subscribe(data=>{
      
      this.Items = data;
this.CalcularTotal();
    })

    
  }

  CalcularTotal(){
    
    this.SubTotal = 0;
  this.TotalGeneral = 0;
  if (this.Items.length > 0) {

    this.Items.forEach(item => {
      this.SubTotal = this.SubTotal + item.Subtotal;
    });

    this.TotalGeneral = this.SubTotal + this.Envio;
  }
}

  scrollTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Other
  }
 
}
