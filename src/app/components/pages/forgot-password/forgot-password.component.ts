import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  userEmail = new FormControl('');
  constructor(private authLoginRegister: LoginService, private router: Router) {}
ngOnInit() {

  
 
}
  async onReset() {
    try {
      const email = this.userEmail.value;
      await this.authLoginRegister.resetPassword(email);
      window.alert('Email Enviado, Revisa tu bandeja de entrada!');
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
}
