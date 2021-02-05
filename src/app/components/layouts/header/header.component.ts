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
public user : any;
public userG: any;
conteoPedidos: number= 0;

  constructor(private authLoginRegister: LoginService, private router: Router) { }

  async ngOnInit()  {

  
     this.user  = await this.authLoginRegister.getCurrentUser();
    if (this.user ){
      this.IsLogged = true;
    console.log(this.user);
    }

    this.authLoginRegister.IsLogged.subscribe(data=>{
      this.IsLogged = data;
    });

    this.authLoginRegister.userInfo.subscribe(data=>{
      this.user = data;
    });
   
  }

  async onLogout(){
    try{ 
      await this.authLoginRegister.logout();
      this.router.navigate(['/login']);}
    catch(error){console.log(error);}
   

  }

 
      
    

}
