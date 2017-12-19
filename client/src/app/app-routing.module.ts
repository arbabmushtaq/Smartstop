import {Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './services/gaurds/auth-guard.service';
import { NotAuthGuard } from './services/gaurds/not-auth-guard.service';
import {PreloadComponent } from './preload/preload.component';
import {SuperComponent} from './super/super.component';
import { CategoryComponent} from "./components/category/category.component";
import {ProductsComponent} from "./components/products/products.component";
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { GroceryComponent } from './components/grocery/grocery.component';



const  myRoutes = RouterModule.forRoot([
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path : 'register',
    component : RegisterComponent,
    canActivate:[NotAuthGuard]
  },
  {
    path : 'login',
    component : LoginComponent,
    canActivate:[NotAuthGuard]
  },
  {
    path : 'profile',
    component : ProfileComponent,
    canActivate:[AuthGuard]
  },

  {
    path:'',
    component: PreloadComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'addproduct',
    component:CategoryComponent
  },

  {
    path: 'super',
    component: SuperComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'products/electronics',
    component: ElectronicsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'products/clothing',
    component: ClothingComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'products/grocery',
    component: GroceryComponent,
    canActivate:[AuthGuard]
  },




]);


@NgModule({
  declarations: [HomeComponent],
  imports: [ myRoutes ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModules { }
