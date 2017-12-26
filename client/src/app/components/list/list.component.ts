import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators} from "@angular/forms";
import { CategoryService} from "../../services/category.service"


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   
 categories;
 imtiaztotal;
 chasetotal;
 chaseuptotal;
   show(){
    
    var data=[] ;
    var set1=new Set();
    var imtiaztotal=0;
    var chasetotal=0;
    var chaseuptotal=0;
   for(var i=0;i<localStorage.length;i++)
    {if(localStorage.getItem('item'+(i+1))==null)
    continue;
      set1.add ( localStorage.getItem('item'+(i+1)));
  }
    console.log(set1);
    var j=0;
    set1.forEach(function(value) {
      data[j]=JSON.parse(value);
     if (data[j].imtiazprice !='N/A')
        imtiaztotal+= parseInt(data[j].imtiazprice);
        if (data[j].chaseprice !='N/A')
        chasetotal+= parseInt(data[j].chaseprice);
        if (data[j].chaseupprice !='N/A')
        chaseuptotal+= parseInt(data[j].chaseupprice);
      j++;
      
    });
    
    this.imtiaztotal=imtiaztotal;
    this.chasetotal=chasetotal;
    this.chaseuptotal=chaseuptotal;
    console.log(imtiaztotal + " " +chasetotal + "  "+ chaseuptotal);
    console.log(data);
    this.categories=data;
    // var table, row, cell;
  
    // table = document.getElementById('table');
  
    // for (var i = 0; i < data.length; i++) {
    //   row = table.insertRow(-1);
  
    //   for (var prop in data[i]) {
    //     cell = row.insertCell();
    //     cell.innerText = data[i][prop];
    //   }
    // }
    // var total = ["Total",imtiaztotal,chasetotal,chaseuptotal];
    // row=table.insertRow(-1);

    //     for (var l=0;l<4;l++) {
    //       cell = row.insertCell();
    //       cell.innerText = total[l];}

 }

  
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
