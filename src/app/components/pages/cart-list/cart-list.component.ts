import { Component, OnInit, Input} from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
ProductosCart: Array<Products>;
Items = [];
  constructor(private shopCart: ShoppingCartService) { }

  ngOnInit()  {
this.getItems();
  }

  getItems(){
    this.shopCart.itemAComprarNuevo.subscribe(data=>{
      console.log('Datos',data);
      this.Items = data

    })
  }
}
