import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import {FormControl, FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { CustomValidator } from '../../validators/validator'
import  { ServauthService } from  '../../services/servauth.service';
import { Http , Headers , RequestOptions } from '@angular/http';


@Component({
  selector: 'app-svregister',
  templateUrl: './svregister.component.html',
  styleUrls: ['./svregister.component.css'],
  providers: [ ServauthService ]
})
export class SvregisterComponent  {
  message; // message variable for show and hide message
  messageClass; // class binding
  processing = false; //for only one time submit form
  usernameValid =true;
  usernameMessage;
  emailValid=true;
  emailMessage;

  form: FormGroup;

  formEnable(){

    this.form.controls['username'].enable();
    this.form.controls['email'].enable();
    this.form.controls['password'].enable();
    this.form.controls['confirmpass'].enable();
    /*
     this.form.get('username').enable();
     this.form.get('email').enable();
     this.form.get('role').enable();
     this.form.get('password').enable();
     this.form.get('confirmpass').enable();*/
   }
  formDisable(){
     this.form.controls['username'].disable();
     this.form.controls['email'].disable();
     this.form.controls['password'].disable();
     this.form.controls['confirmpass'].disable();

    /* this.form.get('username').disable();
     this.form.get('email').disable();
     this.form.get('role').disable();
     this.form.get('password').disable();
     this.form.get('confirmpass').disable();*/
  }


  constructor(private _fb: FormBuilder , private  _authService : ServauthService) {
    this.createRegisterForm();

  }

  createRegisterForm (){
    this.form = this._fb.group({
      //  username:  ['', Validators.minLength(3)] ,
      username: ['', Validators.compose([
        Validators.required ,
        Validators.minLength(3),
        Validators.maxLength(35),
        CustomValidator.usernameValidator,
        CustomValidator.cannotContainSpace
      ]) ],
      email: ['', Validators.compose([
        Validators.required ,
        Validators.minLength(3),
        Validators.maxLength(35),
        CustomValidator.cannotContainSpace,
        CustomValidator.emailValidator
      ]) ],
      
      password: ['', Validators.compose([
        Validators.required ,
        Validators.minLength(6),
        Validators.maxLength(20),
        CustomValidator.passwordlValidator,
        CustomValidator.cannotContainSpace
      ]) ],
      confirmpass: ['', Validators.required ]

    } , { validator: CustomValidator.marchingPassword('password' , 'confirmpass') }

      );

  }// createRegisterForm closed




  onRegisterFormSubmit() {


    this.processing = true;
    this.formDisable();

   const serv = {
      username: this.form.get('username').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }

    this._authService.registerSurv(serv).subscribe(data=>{
      if(!data.success){
        this.messageClass = 'alert alert-danger';
        this.message = data.message
        this.processing = false;
        this.formEnable();
      }else {
        this.messageClass = 'alert alert-success';
        this.message = data.message

      }
    });

  }
  //check username, current username already taken or not
  checkUsername(){
      const  username =  this.form.get('username').value;
        this._authService.checkUsername(username).subscribe(data=>{
          if(!data.success){
            this.usernameValid = false ;
            this.usernameMessage = data.message;
          }else {
            this.usernameValid  = true ;
            this.usernameMessage = data.message;
          }
        });
  }
  //check email id, current email alreafy =
  checkEmail(){
    const  email =  this.form.get('email').value;
    this._authService.checkEmail(email).subscribe(data=>{
      if(!data.success){
        this.emailValid = false ;
        this.emailMessage = data.message;
      }else {
        this.emailValid  = true ;
        this.emailMessage = data.message;

      }
    });
  }

  




}
