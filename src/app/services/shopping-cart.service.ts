import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { BehaviorSubject, Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {
 
  public Total = 0;
  public ItemAComprar = new BehaviorSubject([]);
  public itemLocalStorage : any;
  public dataInLocalStorage:any;
  public TotalCheckOut: number;
  constructor() { 
    this.itemLocalStorage= localStorage.getItem('ShopCart');
    if (this.itemLocalStorage){
      this.ItemAComprar.next(JSON.parse( this.itemLocalStorage));
      
    }
   
  }
  
 
 

addShoppingCart (Item){
  console.log("Item llegando", Item);


  let temp = this.ItemAComprar.getValue();
temp.push(Item);
this.ItemAComprar.next(temp);
Swal.fire({
  position: 'center',
  icon: 'success',
  title: `Añadiste a ${Item.items.Nombre} a tu carrito de compras`,
  showConfirmButton: false,
  timer: 1500
})
  
localStorage.setItem('ShopCart',JSON.stringify(temp))






}
delete(Item){
  let temp = this.ItemAComprar.getValue();



  Swal.fire({
    title: `Desea eliminar a ${Item.items.Nombre}?`,
    text: "Esta operación no se puede revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Si, eliminar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Hecho!',
        'Este producto ha sido removido',
        'success'
      )
      temp.splice(Item, 1);
this.ItemAComprar.next(temp);
  
localStorage.setItem('ShopCart',JSON.stringify(temp));
this.itemLocalStorage= localStorage.getItem('ShopCart');
}
  })


}





}

