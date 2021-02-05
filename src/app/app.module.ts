import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HeaderTwoComponent } from './components/layouts/header-two/header-two.component';
import { HeaderThreeComponent } from './components/layouts/header-three/header-three.component';
import { BlogSidebarComponent } from './components/layouts/blog-sidebar/blog-sidebar.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { FooterTwoComponent } from './components/layouts/footer-two/footer-two.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { BlogFullComponent } from './components/pages/blog-full/blog-full.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogListComponent } from './components/pages/blog-list/blog-list.component';
import { BlogMasonaryComponent } from './components/pages/blog-masonary/blog-masonary.component';
import { BlogSingleComponent } from './components/pages/blog-single/blog-single.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LegalComponent } from './components/pages/legal/legal.component';
import { LocationsComponent } from './components/pages/locations/locations.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { MenuItemOneComponent } from './components/pages/menu-item-one/menu-item-one.component';
import { MenuItemTwoComponent } from './components/pages/menu-item-two/menu-item-two.component';
import { MenuOneComponent } from './components/pages/menu-one/menu-one.component';
import { MenuTwoComponent } from './components/pages/menu-two/menu-two.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { HeaderFourComponent } from './components/layouts/header-four/header-four.component';
import { HeaderInnerComponent } from './components/layouts/header-inner/header-inner.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AngularCounterModule } from 'angular-input-counter';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    BlogSidebarComponent,
    PreloaderComponent,
    FooterComponent,
    FooterTwoComponent,
    HomeComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    HomeFourComponent,
    AboutUsComponent,
    BlogFullComponent,
    BlogGridComponent,
    BlogListComponent,
    BlogMasonaryComponent,
    BlogSingleComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    LegalComponent,
    LocationsComponent,
    LoginComponent,
    RegisterComponent,
    MenuItemOneComponent,
    MenuItemTwoComponent,
    MenuOneComponent,
    MenuTwoComponent,
    ErrorComponent,
    HeaderFourComponent,
    HeaderInnerComponent,
    ForgotPasswordComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    IvyCarouselModule,
    AngularCounterModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireAuthModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),

    MatCarouselModule.forRoot(),
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule
  ],
  providers: [AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
