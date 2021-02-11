import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';
import { PerfilService } from 'src/app/services/perfil.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.css']
})
export class DireccionesComponent implements OnInit {

  directionForm: FormGroup;
  Titulo = new FormControl('', [Validators.required]);
  Direccion = new FormControl('', [Validators.required]);
  User: User = null;

  constructor(private perfil: PerfilService, private auth: LoginService) { }

  ngOnInit(): void {
    this.directionForm = new FormGroup({
      Titulo: this.Titulo,
      Direccion: this.Direccion
    });

    this.auth.userData$.subscribe(data => {
      if (data) {
        this.User = data;
      }
    });
  }

  deleteDirecction(direccion) {
    this.User.Direcciones = this.User.Direcciones.filter(i => i !== direccion);
    this.perfil.updateUserInfo(this.User);
  }

  async addDireccion() {
    let direccion = {
      Titulo: this.Titulo.value,
      Direccion: this.Direccion.value
    }

    this.User.Direcciones.push(direccion);

    await this.perfil.updateUserInfo(this.User);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Direccion agregada',
      showConfirmButton: false,
      timer: 1500
    });

    this.directionForm.reset();
  }

}
