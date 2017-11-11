import { Component, OnInit } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {FrontComponent} from '../front/front.component';

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


  constructor(private router: Router) { }

  redirect() {
    this.router.navigate(['./SomewhereElse']);
  }


  ngOnInit() {
    this.load = true;
    this.ghayab();
    setTimeout((router: Router) => {
      this.router.navigate(['./home']);    }, 1000);
  }

}
