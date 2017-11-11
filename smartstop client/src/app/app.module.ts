import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { FrontComponent } from './front/front.component';
import { PreloadComponent } from './preload/preload.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    SignupComponent,
    FrontComponent,
    PreloadComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
