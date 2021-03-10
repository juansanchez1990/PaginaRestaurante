import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LegalComponent } from './components/pages/legal/legal.component';
import { LocationsComponent } from './components/pages/locations/locations.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { MenuOneComponent } from './components/pages/menu-one/menu-one.component';
import { MenuTwoComponent } from './components/pages/menu-two/menu-two.component';
import { MenuItemOneComponent } from './components/pages/menu-item-one/menu-item-one.component';
import { MenuItemTwoComponent } from './components/pages/menu-item-two/menu-item-two.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { VerificarCorreoComponent } from './components/pages/verificar-correo/verificar-correo.component';
import { CartListComponent } from './components/pages/cart-list/cart-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { DetallePedidoComponent } from './components/detalle-pedido/detalle-pedido.component';


const routes: Routes = [


  {
    path:'inicio',component:HomeComponent
  },
  {
    path:'',component:HomeComponent
  },

{ 
    path:'about',component:AboutUsComponent
  },

  {
    path:'cart',component:CartComponent
  },
  {
    path:'cartList',component:CartListComponent
  },
  {
    path:'checkout',component:CheckoutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'legal',component:LegalComponent
  },
  {
    path:'locations',component:LocationsComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'VerificarCorreo',component:VerificarCorreoComponent
  },
  {
    path:'menu',component:MenuOneComponent
  },
  {
    path:'detallePedido',component:DetallePedidoComponent
  },
  {
    path:'forgotPasswword',component:ForgotPasswordComponent
  },
  {
    path:'admin',component:AdminComponent
  },
  {
    path:'perfil',component:PerfilComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
