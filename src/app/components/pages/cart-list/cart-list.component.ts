import { Component, OnInit, Input, AfterViewInit} from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, AfterViewInit {
ProductosCart: Array<Products>;
Items = [];
selectedSize = null;
Total: number= 0;
Subtotal: number= 0;
  constructor(private shopCart: ShoppingCartService) { }

  ngOnInit()  {
    this.getItems();
    this.Items.forEach(item=>{
    this.Subtotal = this.Subtotal + item.Total;
    })
    this.Total = this.Subtotal*1.15;

  }
ngAfterViewInit(){

}
delete(Item){

this.shopCart.delete(Item);

}
  getItems(){
    this.shopCart.ItemAComprar.subscribe(data=>{
      
      this.Items = data;

    })

    
  }

}