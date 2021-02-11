import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';
import { PerfilService } from 'src/app/services/perfil.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  userForm: FormGroup;
  Nombre = new FormControl('', [Validators.required]);
  NoIdentidad = new FormControl('', [Validators.required]);
  NoTelefono = new FormControl('', [Validators.required]);
  User: User = null;

  constructor(private perfil: PerfilService, private auth: LoginService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      Nombre: this.Nombre,
      NoIdentidad: this.NoIdentidad,
      NoTelefono: this.NoTelefono,
    });

    this.auth.userData$.subscribe(data => {
      if (data) {
        this.Nombre.setValue(data.displayName);
        this.NoIdentidad.setValue(data.NoCedula);
        this.NoTelefono.setValue(data.NoTelefono);
        this.User = data;
      }
    });
  }

  async updateUserData() {
    this.User.displayName = this.Nombre.value;
    this.User.NoCedula = this.NoIdentidad.value;
    this.User.NoTelefono = this.NoTelefono.value;
    await this.perfil.updateUserInfo(this.User);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Informacion actualizada',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
