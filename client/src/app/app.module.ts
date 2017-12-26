import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModules } from  './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { Http , Headers , RequestOptions ,HttpModule  } from '@angular/http';
import { ProfileComponent } from './components/profile/profile.component';
import { FlashMessagesModule} from  'angular2-flash-messages';
import { AuthGuard } from './services/gaurds/auth-guard.service';
import { NotAuthGuard } from './services/gaurds/not-auth-guard.service';
import { PreloadComponent } from './preload/preload.component';
import { CategoryService } from "./services/category.service";
import { CategoryComponent} from "./components/category/category.component";
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { ListComponent } from './components/list/list.component';
import { SvregisterComponent } from './components/svregister/svregister.component';
import { SvloginComponent } from './components/svlogin/svlogin.component';
import {ServauthService} from './services/servauth.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    PreloadComponent,
    CategoryComponent,
    ProductsComponent,
    ContactComponent,
    AboutComponent,
    ElectronicsComponent,
    ListComponent,
    SvregisterComponent,
    SvloginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModules,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,

    FlashMessagesModule

  ],
  providers: [AuthService ,AuthGuard,NotAuthGuard,CategoryService,ServauthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
