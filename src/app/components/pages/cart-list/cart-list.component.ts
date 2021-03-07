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
Total: number;
  constructor(private shopCart: ShoppingCartService) { }

  ngOnInit()  {
    this.getItems();
  }
ngAfterViewInit(){

}
delete(Item){

this.shopCart.delete(Item);

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

}