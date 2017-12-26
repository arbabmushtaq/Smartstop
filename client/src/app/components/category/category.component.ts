import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators} from "@angular/forms";
import { CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {





  categories;
  constructor(
              private _fb:FormBuilder,
              private _categoryService:CategoryService
  ) {

  }


  
    
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
      newcat:['' , Validators.compose([
        Validators.required
      ])]
    })



  addCategoryFormSubmit(){

      console.log('form submit');
      console.log(this.form);

      const product = {
        name:this.form.get('category').value,
        price:this.form.get('price').value,
        code:this.form.get('code').value,
        categ:this.form.get('newcat').value,
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
var set1 = new Set();
for (let i of data.category)
{console.log("in loop")
set1.add(i.categ);
}
var j=0;
var arr=[];
set1.forEach(function(value) {
arr[j]=value;
j++;
});
console.log(arr)
    this.categories=arr;
    if (this.categories.length==0)
    this.categories=['electronics'];
    
    console.log(this.categories)
    })
    
  }

  reload()
  {
    location.reload();
    
  }



  ngOnInit() {
    this.AllCategory();
  }

}
