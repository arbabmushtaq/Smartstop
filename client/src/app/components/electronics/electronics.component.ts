import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators} from "@angular/forms";
import { CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  categories;

  code;
  
    constructor(
                private _fb:FormBuilder,
                private _categoryService:CategoryService,
               
    ) {
  
    }
  
    AllCategory(){
      this._categoryService.getElectronicCategory().subscribe(data=>{
      //  console.log(data);

        
        this.categories = data.category;
      
      })
    }
  
    count = 0;
    
    listClick(code){
      
      code  = {
        code:code,
        mart:'imtiaz'
      }
      this.count++; 
      this._categoryService.getListimtiaz(code).subscribe(data=>{
            
      
            localStorage.setItem('item'+this.count, JSON.stringify(data))

      });
      console.log('here');
      code.mart='chase';
      console.log(code);
      console.log('here too');
      this._categoryService.getListchase(code).subscribe(data=>{

        console.log(data);
        
        this.count++;
        localStorage.setItem('item'+this.count, JSON.stringify(data))

  });
  console.log('here three');
  code.mart='chaseup';
  console.log(code);
      this._categoryService.getListchaseup(code).subscribe(data=>{
        
        this.count++;
        localStorage.setItem('item'+this.count, JSON.stringify(data))

  });
    }


    
                // THIS IS DEFAULT. IF YOU DO NOT DEFINE IT, IT REMAINS 'false'.
                public isDisabled = false;
    
                save = function () {
                    console.log('Data Saved.');
                    this.isDisabled = true;
                    console.log(this.isDisabled);
                };
            


    // listClickRemove(code){
      
    //   code  = {
    //     code:code
    //   }
    //   this.count++; 
    //   this._categoryService.getList(code).subscribe(data=>{
    //         console.log(data);

    //         localStorage.removeItem('item'+this.count)

    //   });
    // }
  
  
  
    ngOnInit() {
      this.AllCategory();
    }

}


