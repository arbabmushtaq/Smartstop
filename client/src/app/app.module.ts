import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModules } from  './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { Http , Headers , RequestOptions ,HttpModule  } from '@angular/http';
import { ProfileComponent } from './components/profile/profile.component';
import { FlashMessagesModule} from  'angular2-flash-messages';
import { AuthGuard } from './services/gaurds/auth-guard.service';
import { NotAuthGuard } from './services/gaurds/not-auth-guard.service';
import { PreloadComponent } from './preload/preload.component';
import { SuperComponent } from './super/super.component';
import { CategoryService } from "./services/category.service";
import { CategoryComponent} from "./components/category/category.component";
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { GroceryComponent } from './components/grocery/grocery.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    PreloadComponent,
    SuperComponent,
    CategoryComponent,
    ProductsComponent,
    ContactComponent,
    AboutComponent,
    ElectronicsComponent,
    ClothingComponent,
    GroceryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModules,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,

    FlashMessagesModule

  ],
  providers: [AuthService ,AuthGuard,NotAuthGuard,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
