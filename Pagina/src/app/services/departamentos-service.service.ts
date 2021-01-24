import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Departamentos } from '../interfaces/departamentos';


@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  Departamentos: Observable<Departamentos[]>;

  private DepartamentosCollection: AngularFirestoreCollection<Departamentos>;

  constructor(private readonly afs: AngularFirestore) {
    this.DepartamentosCollection = afs.collection<Departamentos>('Departamentos');
    this.getDepartamentos();
  }
    private getDepartamentos(): void {
    this.Departamentos = this.DepartamentosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Departamentos))
    );
  }
}
