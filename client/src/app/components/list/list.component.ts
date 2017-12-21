import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators} from "@angular/forms";
import { CategoryService} from "../../services/category.service"


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   
   obj;
   x;
   names=[];
   prices=[];

   show(){
    let arr1 = [];
    this.obj ={
      cat:arr1
    }

this.x = arr1


    for(var k=0;k<localStorage.length-2;k++)
    {if (JSON.parse(localStorage.getItem("item"+(k+1))).category.length==0)
    {
      this.names[k]=tempname;
      this.prices[k]='N/A';
      arr1[k]={name:tempname,price:'N/A'};
      
    }
    else{

var tempname = JSON.parse(localStorage.getItem("item"+(k+1))).category[0].name;
var tempprice = JSON.parse(localStorage.getItem("item"+(k+1))).category[0].price;
this.names[k]=tempname;
this.prices[k]=tempprice;
arr1[k]={name:tempname,price:tempprice};}
console.log(arr1[k]);
    
}
for(var i=0;i<this.names.length;i++)
{var x = document.createElement("TD");
var t = document.createTextNode('\n'+this.names[i]);
//console.log(this.names[i]+"at index "+i);
x.appendChild(t);
document.getElementById("myTr").appendChild(x);


var x = document.createElement("TD");
var t = document.createTextNode(this.prices[i]);
x.appendChild(t);
document.getElementById("myTr").appendChild(x);
i++;
var x = document.createElement("TD");
var t = document.createTextNode(this.prices[i]);
x.appendChild(t);
document.getElementById("myTr").appendChild(x);
i++;
var x = document.createElement("TD");
var t = document.createTextNode(this.prices[i]+ '\n');
x.appendChild(t);
document.getElementById("myTr").appendChild(x);
var t = document.createTextNode('\n');
document.getElementById("myTr").appendChild(t);
var lineBreak = document.createElement ("br");
var tag=document.getElementById("myTr");
var child = document.getElementById("child");
tag.insertBefore(lineBreak,child);
}

console.log(this.prices);

//   for(var j=1;j<=localStorage.length-2;j=j+3){
//     if (JSON.parse(localStorage.getItem("item"+j)).category.length==0)
//       {
//         console.log(JSON.parse(localStorage.getItem("item"+j+1)).category[0].name);
//       }
//     else
//     console.log(JSON.parse(localStorage.getItem("item"+j)).category[0].name);
    
//     for (var i = 0+j; i <= 2+j; i++){
//     var temp = JSON.parse(localStorage.getItem("item"+i));
    
//     if(temp.category.length==0)  
//     {console.log('N/A');}
//     else
//     console.log(temp.category[0].price);
    
    
// }

// }
}

  categories;
  
    code;
    
      constructor(
                  private _fb:FormBuilder,
                  private _categoryService:CategoryService
      ) {
    
      }
      
    
    
      ngOnInit() {
        this.show();
      }
      
      

}
