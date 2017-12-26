import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators} from "@angular/forms";
import { CategoryService} from "../../services/category.service";
import {ProductsComponent} from "../products/products.component";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css'],
})
export class ElectronicsComponent implements OnInit {

  categories;
  code;
    constructor(
                private _fb:FormBuilder,
                private _categoryService:CategoryService,
                private router:Router, 
                private location: Location
                
    ) {
      }

 
    AllCategory(){
      console.log("fetching data with "+this.router.url.split('/')[2]);
      this._categoryService.getCategory(this.router.url.split('/')[2]).subscribe(data=>{
        console.log(this.router.url.split('/')[2])
        this.categories = data.category;
      
      })
    }
  
    count = localStorage.length-2;
     temp ={}as any;
    
    
     listClick(code){
      
      code  = {
        code:code,
        mart:'imtiaz'
      }
      
      this._categoryService.getList(code).subscribe(data=>{
           
   

           if (data.category.length==0)
           {this.temp.name='np';
             this.temp.imtiazprice='N/A';
          }
    else 
    {this.temp.name = data.category[0].name;
      this.temp.imtiazprice = data.category[0].price;
      }
    

      });
     
      code.mart='chase';
      
      this._categoryService.getList(code).subscribe(data=>{
        if (data.category.length==0){
          this.temp.chaseprice='N/A';
          }
          else 
          {
            this.temp.name = data.category[0].name;
            this.temp.chaseprice = data.category[0].price;
          }
  });

  code.mart='chaseup';
  
      this._categoryService.getList(code).subscribe(data=>{
        if (data.category.length==0){
          this.temp.chaseupprice='N/A';
         }
          else 
          { this.temp.name = data.category[0].name;
            this.temp.chaseupprice = data.category[0].price;}
        this.count++;
        console.log(this.temp);
        
        localStorage.setItem("item"+this.count,JSON.stringify(this.temp));

  });
    }


    
                // THIS IS DEFAULT. IF YOU DO NOT DEFINE IT, IT REMAINS 'false'.
                public isDisabled = false;
    
                save = function () {
                    console.log('Data Saved.');
                    this.isDisabled = true;
                    console.log(this.isDisabled);
                };
            


                navigateBack() {
                  this.location.back();
                }
    ngOnInit() {
      
      this.AllCategory();
    }

}


