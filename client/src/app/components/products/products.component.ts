import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators} from "@angular/forms";
import { CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  //form:FormGroup;
  categories;
  
    constructor(
                private _fb:FormBuilder,
                private _categoryService:CategoryService
    ) {
  
    }
  
    AllCategory(){
      this._categoryService.getAllCategory().subscribe(data=>{
        console.log(data);
        this.categories = data.category;
      })
    }
  
  
  
  
  
    ngOnInit() {
      this.AllCategory();
    }
  

}



