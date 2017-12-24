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
      this._categoryService.getCategory('electronics').subscribe(data=>{
      //  console.log(data);

        
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
        if (data.category.length=0){this.temp.name = data.category[0].name;
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


    
                // THIS IS DEFAULT. IF YOU DO NOT DEFINE IT, IT REMAINS 'false'.
                public isDisabled = false;
    
                save = function () {
                    console.log('Data Saved.');
                    this.isDisabled = true;
                    console.log(this.isDisabled);
                };
            


    // listClickRemove(code){
      
    //   code  = {
    //     code:code,
    //     mart:'imtiaz'
    //   }
    //   this._categoryService.getList(code).subscribe(data=>{
    //         console.log(data);
    //         var temp1 = JSON.stringify(data);
    //         for (var i=1;i<=localStorage.length-2;i++){
    //           var temp =localStorage.getItem("item"+i);
    //           console.log(temp+"and "+temp1);
    //           if (temp1== temp)
    //             {console.log('match');
    //               localStorage.removeItem("item"+i);
    //               localStorage.removeItem("item"+i+1);
    //               localStorage.removeItem("item"+i+2);}
    //         }

    //   });
    // }
  
  
  
    ngOnInit() {
      this.AllCategory();
    }

}


