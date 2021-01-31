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
public user : any;
  constructor(private authLoginRegister: LoginService, private router: Router) { }

  async ngOnInit()  {
    console.log('navbas');
     this.user  = await this.authLoginRegister.getCurrentUser();
    if (this.user ){
      this.IsLogged = true;
    
    }
   
  }

  onLogout(){
    this.authLoginRegister.logout();
    this.router.navigate(['/login']);
  }

}
