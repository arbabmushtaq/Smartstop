import { Injectable } from '@angular/core';
import { Http ,RequestOptions , Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { AuthService} from "./auth.service";

@Injectable()
export class CategoryService {

  domain = 'http://localhost:1212'

  constructor(private _http:Http,
              private _authService : AuthService
  ) { }

  addCategory(category){
    this._authService.createAuthenticationHeaders();
     return this._http.post(this.domain+'/category/addCategory',category, this._authService.options).map(res=>res.json());
  }

  getAllCategory(){
    this._authService.createAuthenticationHeaders();
    return this._http.get(this.domain+'/category/allCategory', this._authService.options).map(res=>res.json());
  }


  getElectronicCategory(){
    this._authService.createAuthenticationHeaders();
    return this._http.get(this.domain+'/category/electronics', this._authService.options).map(res=>res.json());
  }

  getGroceryCategory(){
    this._authService.createAuthenticationHeaders();
    return this._http.get(this.domain+'/category/grocery', this._authService.options).map(res=>res.json());
  }
  getClothingCategory(){
    this._authService.createAuthenticationHeaders();
    return this._http.get(this.domain+'/category/clothing', this._authService.options).map(res=>res.json());
  }
  getListimtiaz(code){
    this._authService.createAuthenticationHeaders();
    return this._http.post(this.domain+'/category/list',code, this._authService.options).map(res=>res.json());
  }
  
  getListchase(code){
    this._authService.createAuthenticationHeaders();
    return this._http.post(this.domain+'/category/list',code, this._authService.options).map(res=>res.json());
  }
  getListchaseup(code){
    this._authService.createAuthenticationHeaders();
    return this._http.post(this.domain+'/category/list',code, this._authService.options).map(res=>res.json());
  }
}
