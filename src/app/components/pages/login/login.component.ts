import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private  authLoginRegister: LoginService, private router: Router) { }


  ngOnInit(): void {
  }

 async onGoogleLogin(){
   try{

     this.authLoginRegister.loginGoogle()
     this.router.navigate(['/home'])
   }
   catch(error){
     console.log(error);
   }
  }
  async onLogin(){
    const {email, password} = this.loginForm.value
    try{ 
      const user= await this.authLoginRegister.Login(email,password);
    
      if (user ){
        this.router.navigate(['/home'])
      }
    } 
    catch(error){
      console.log(error);
    }
   
   
  }
}
