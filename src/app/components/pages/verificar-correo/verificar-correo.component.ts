import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificar-correo',
  templateUrl: './verificar-correo.component.html',
  styleUrls: ['./verificar-correo.component.css']
})
export class VerificarCorreoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    document.querySelector('router-outlet').scrollTop = 0;
  }
  goToPage(){
    this.router.navigateByUrl('/login');
  }

}
