import { Injectable } from '@angular/core';
import { Http ,RequestOptions , Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { AuthService} from "./auth.service";

@Injectable()
export class CategoryService {
  curcat;
  domain = 'http://localhost:1212'

  constructor(private _http:Http,
              private _authService : AuthService
  ) { }

  addProduct(product){
    this._authService.createAuthenticationHeaders();
     return this._http.post(this.domain+'/category/addProduct',product, this._authService.options).map(res=>res.json());
  }

  getAllCategory(){
    this._authService.createAuthenticationHeaders();
    return this._http.get(this.domain+'/category/allCategory', this._authService.options).map(res=>res.json());
    
  }


  getCategory(cat){
    this._authService.createAuthenticationHeaders();
    return this._http.get(this.domain+'/category/'+cat, this._authService.options).map(res=>res.json());
  }

  getList(code){
    this._authService.createAuthenticationHeaders();
    return this._http.post(this.domain+'/category/list',code, this._authService.options).map(res=>res.json());
  }
}
