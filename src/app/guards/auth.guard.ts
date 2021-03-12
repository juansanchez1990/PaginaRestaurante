import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private Login: LoginService, private router: Router){}

  

  }

