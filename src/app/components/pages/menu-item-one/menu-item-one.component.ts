import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu-item-one',
  templateUrl: './menu-item-one.component.html',
  styleUrls: ['./menu-item-one.component.css']
})
export class MenuItemOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
