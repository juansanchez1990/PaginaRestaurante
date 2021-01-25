import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Products } from '../interfaces/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  Productos: Observable<Products[]>;
  private ProductosCollection: AngularFirestoreCollection<Products>;

  constructor(private readonly afs: AngularFirestore) { 
    this.ProductosCollection = afs.collection<Products>('Productos');
    this.getProductos();
  }

  private getProductos(): void {
    this.Productos = this.ProductosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Products))
    );
  }
}
