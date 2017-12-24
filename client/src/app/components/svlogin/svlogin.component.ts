import { Component, OnInit  } from '@angular/core';
import { NgClass } from '@angular/common';
import { ServauthService } from '../../services/servauth.service';
import { FormGroup , FormControl , FormBuilder , Validators } from '@angular/forms';
import { Router } from  '@angular/router';
import { Http , Headers , RequestOptions } from '@angular/http';
import { AuthGuard } from '../../services/gaurds/auth-guard.service';

@Component({
  selector: 'app-svlogin',
  templateUrl: './svlogin.component.html',
  styleUrls: ['./svlogin.component.css'],
  providers: [ ServauthService ]

})
export class SvloginComponent implements OnInit {
 

  message;
  messageClass;
  processing = false;
  previousUrl;

  form:FormGroup;

  formDisable(){
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
  }
  formEnable(){

    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
  }

  constructor(private _fb: FormBuilder,
              private _authService:ServauthService ,
              private _router:Router,
              private _authGaurd:AuthGuard) {
    this.createLoginForm();
  }


  createLoginForm(){
    this.form = this._fb.group({
      username: ['', Validators.required],
      password: ['',Validators.required]

    });
  }



  onLoginFormSubmit(){
     this.processing = true;
     this.formDisable();

    const serv = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }
    this._authService.loginSurv(serv).subscribe(data=>{
      if(!data.success){
        this.messageClass = "alert alert-danger";
        this.message =  data.message;
         this.processing = false;
         this.formEnable();
      }else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;

         this._authService.storeSurvData(data.token , data.sv);
         setTimeout( () =>{
           //check if previous URL exist
           if(this.previousUrl){
             this._router.navigate([this.previousUrl]);
           }else {
             this._router.navigate(['/addproduct']);
           }

         },2000);


      }
    })
  }


  ngOnInit() {

    if (this._authGaurd.redirectUrl){
      this.messageClass = 'alert alert-danger';
      this.message = "You must be logged in to view this page!"
      this.previousUrl = this._authGaurd.redirectUrl;
      this._authGaurd.redirectUrl = undefined;
    }


  }


}


