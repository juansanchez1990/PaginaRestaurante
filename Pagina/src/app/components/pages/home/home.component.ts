import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private storage: AngularFireStorage) { }
  DepartamentosFotos =[];
  ngOnInit(): void {
    this.FotosDepartamentos();
  }
  FotosDepartamentos() {
    this.storage.storage.ref('ImagesPortada').listAll().then(data => {

      data.items.forEach(element => {
        let fotos = 0
        element.getDownloadURL().then(data => {

          this.DepartamentosFotos.push(
            {
              id: fotos + 1,
              src: data,
              thumb: data,

            },

          );

          fotos++;
        });
      });
    });


  }
}
