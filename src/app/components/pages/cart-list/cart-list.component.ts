import { Component, OnInit, Input} from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
ProductosCart: any;
  constructor(private shopCart: ShoppingCartService) { }

  ngOnInit()  {
   this.ProductosCart = this.shopCart.Item$

   console.log('Estos son los productos a enviar', this.ProductosCart);
  }

}
