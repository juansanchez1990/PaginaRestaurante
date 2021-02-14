import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LoginService]
})
export class HeaderComponent implements OnInit {
  public IsLogged = false;
  public IsLoggedGoogle = false;
  public user: any;
  public userG: any;
  conteoPedidos: number = 0;

  constructor(private authLoginRegister: LoginService, private router: Router) { }

  async ngOnInit() {

    this.authLoginRegister.isSessionActive$.subscribe(data => {
      this.IsLogged = data;
      console.log('Está logueado?',this.IsLogged);
    });

    this.authLoginRegister.userData$.subscribe(data => {
      this.user = data;
      console.log('Data',this.user);
    });

  }

  async onLogout() {
    try {
      await this.authLoginRegister.SignOut();
    }
    catch (error) { console.log(error); }


  }





}
