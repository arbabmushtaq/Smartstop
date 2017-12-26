import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators} from "@angular/forms";
import { CategoryService} from "../../services/category.service";
import {ElectronicsComponent} from "../electronics/electronics.component";
import {Router} from '@angular/router'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  //form:FormGroup;
  categories=[];
  selectedcategory;
  
    constructor(
                private _fb:FormBuilder,
                private _categoryService:CategoryService,
                
                private router:Router
    ) {
  
    }

  
    AllCategory(){
      this._categoryService.getAllCategory().subscribe(data=>{
        
console.log(data);
var set1 = new Set();
for (let i of data.category)
{
  set1.add(i.categ);
}
var j=0;
var arr=[];
set1.forEach(function(value) {
arr[j]=value;
j++;
});
      this.categories=arr;
      })
    }
  
  
  
  
    ngOnInit() {
      
      this.AllCategory();
    }
  

}



