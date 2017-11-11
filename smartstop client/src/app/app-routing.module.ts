import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginformComponent} from './loginform/loginform.component';
import {FrontComponent} from './front/front.component';


import {APP_BASE_HREF} from '@angular/common';
import {PreloadComponent} from './preload/preload.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginformComponent},
  { path: 'signup', component: SignupComponent },
  { path: '', component: PreloadComponent },
  { path: 'home', component: FrontComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppRoutingModule {}
