import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators} from "@angular/forms";
import { CategoryService} from "../../services/category.service"


@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {

  categories;
  
    constructor(
                private _fb:FormBuilder,
                private _categoryService:CategoryService
    ) {
  
    }
  
    AllCategory(){
      this._categoryService.getGroceryCategory().subscribe(data=>{
        console.log(data);
        this.categories = data.category;
      })
    }
  
  
  
  
  
    ngOnInit() {
      this.AllCategory();
    }

}
