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
  public productos: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore) { 
    this.productos = <Observable<any>> afs.collection('Productos').valueChanges(items => { 
      return items.map(item => { 
        return item;
      })
    });
}
    
  }

  

