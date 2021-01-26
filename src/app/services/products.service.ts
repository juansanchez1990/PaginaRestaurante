import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Products } from '../interfaces/products';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public productos = new BehaviorSubject<Products[]>([]);


  constructor(private afs: AngularFirestore) {
    this.getProductos();
  }





  getProductos() {
    return this.afs.collection('Productos').valueChanges().subscribe((items:any) => {
      this.productos.next(items[0].Productos);
    });
  }

}



