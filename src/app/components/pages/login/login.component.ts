import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import Swal from 'sweetalert2'

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
  private scrollContainer: any;
  constructor(private  authLoginRegister: LoginService, private router: Router) { }
 
  ngOnInit(): void {
  }

 async onGoogleLogin(){
   try{

     this.authLoginRegister.GoogleAuth()
   }
   catch(error){
     console.log(error);
   }
  }
  
  async onLogin(){
    const {email, password} = this.loginForm.value
    try{ 
       this.authLoginRegister.SignIn(email,password);
    } 
    catch(error){
 
    }
   
   
  }
  



}
