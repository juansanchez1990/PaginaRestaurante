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
selectedSize = null;
Total: number;
  constructor(private shopCart: ShoppingCartService) { }

  ngOnInit()  {

  }
ngAfterViewInit(){
  this.getItems();
}
  getItems(){
    this.shopCart.ItemAComprar.subscribe(data=>{
      
      this.Items = data;
     console.log('esta es la data',data);
      // console.log('Datos Recibidos',this.Items);

    })
  }

}