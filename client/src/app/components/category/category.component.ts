import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators} from "@angular/forms";
import { CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {





  //form:FormGroup;
  categories;

  constructor(
              private _fb:FormBuilder,
              private _categoryService:CategoryService
  ) {

  }


  // form =this._fb.group({
    
    form =this._fb.group({
      category:['' , Validators.compose([
        Validators.required
      ])],
      price:['' , Validators.compose([
        Validators.required
      ])],

      code:['' , Validators.compose([
        Validators.required
      ])],
      categ:['' , Validators.compose([
        Validators.required
      ])],
      mart:['' , Validators.compose([
        Validators.required
      ])],
      description:['' , Validators.compose([
        Validators.required
      ])],

    })



  addCategoryFormSubmit(){

      console.log('form submit');
      console.log(this.form);

      const product = {
        name:this.form.get('category').value,
        price:this.form.get('price').value,
        code:this.form.get('code').value,
        categ:this.form.get('categ').value,
        mart:this.form.get('mart').value,
        description:this.form.get('description').value,
      }



      this._categoryService.addProduct(product).subscribe(data=>{


      console.log(data);
      console.log(product);


     });
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
