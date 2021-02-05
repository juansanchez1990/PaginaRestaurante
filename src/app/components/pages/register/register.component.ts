import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [LoginService]
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    nombre: new FormControl(),
    email: new FormControl(''),
    password: new FormControl(''),

  })
  constructor(private authLoginRegister: LoginService, private router: Router) { }

  ngOnInit() {
 
  }
  async onRegister(){
    const {email, password}=this.registerForm.value;
    try{
    
   const user=   this.authLoginRegister.register(email, password);
   if (user){
this.router.navigate(['/home'])
   }
    }
    catch(error){console.log(error);
      this.router.navigate(['/login'])
    }

  }

}
