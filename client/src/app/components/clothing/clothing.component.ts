import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators} from "@angular/forms";
import { CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {
  clothes;
  
    code;
    
      constructor(
                  private _fb:FormBuilder,
                  private _categoryService:CategoryService,
                 
      ) {
    
      }
    
      AllCategory(){
        this._categoryService.getCategory('clothing').subscribe(data=>{
        //  console.log(data);
  
          
          this.clothes = data.category;
        
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
         if (data.category.length!=0){this.temp.name = data.category[0].name;
           this.temp.chaseprice = data.category[0].price;}
           else 
           {this.temp.chaseprice='N/A'};
         
         
         
 
   });
 
   code.mart='chaseup';
   
       this._categoryService.getList(code).subscribe(data=>{
         if (data.category.length!=0){this.temp.name = data.category[0].name;
           this.temp.chaseupprice = data.category[0].price;}
           else 
           {this.temp.chaseupprice='N/A'};
         this.count++;
         console.log(this.temp);
         
         localStorage.setItem("item"+this.count,JSON.stringify(this.temp));
 
   });
     }
  
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
    
      public isDisabled = false;
      
                  save = function () {
                      console.log('Data Saved.');
                      this.isDisabled = true;
                      console.log(this.isDisabled);
                  };
    
      ngOnInit() {
        this.AllCategory();
      }

}
