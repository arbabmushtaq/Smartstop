
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from  '@angular/router';
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.css']
})
export class PreloadComponent implements OnInit {


  
  public load;
  ghayab() {
  setTimeout(function() {
    console.log('hi');
    this.load = false;
    console.log(this.load);
  }.bind(this) , 1000 );
  }

  constructor(private _authService:AuthService , private _router:Router ,private _flashMessageService:FlashMessagesService  ) { }

  redirect() {
    this._router.navigate(['./SomewhereElse']);
  }

  ngOnInit() {
    this.load = true;
    this.ghayab();
    setTimeout((router: Router) => {

      if(this._authService.loggedIn()==false){
        this._router.navigate(['./home']); 
      }else {
        this._router.navigate(['./products']);
      }
         }, 1000);
  }

}
