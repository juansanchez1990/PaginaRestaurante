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
  
    email: new FormControl(''),
    password: new FormControl(''),

  })
  constructor(private authLoginRegister: LoginService, private router: Router) { }

  ngOnInit() {

  }
  async onRegister() {
    const { email, password } = this.registerForm.value;
    try {

 this.authLoginRegister.SignUp(email, password);

    }
    catch (error) {
      console.log(error);

    }

  }

}
