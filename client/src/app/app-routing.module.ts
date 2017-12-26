import {Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './services/gaurds/auth-guard.service';
import { NotAuthGuard } from './services/gaurds/not-auth-guard.service';
import {PreloadComponent } from './preload/preload.component';
import { CategoryComponent} from "./components/category/category.component";
import {ProductsComponent} from "./components/products/products.component";
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { ListComponent } from './components/list/list.component';
import { SvregisterComponent } from './components/svregister/svregister.component';
import { SvloginComponent } from './components/svlogin/svlogin.component';






const  myRoutes = RouterModule.forRoot([
  {
    path: 'home',
    component: HomeComponent
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
    path: 'products/:cat',
    component: ElectronicsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'list',
    component: ListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'svregister',
    component: SvregisterComponent,
  },
  {
    path: 'svlogin',
    component: SvloginComponent,
  }
  
  




]);


@NgModule({
  declarations: [HomeComponent],
  imports: [ myRoutes ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModules { }
