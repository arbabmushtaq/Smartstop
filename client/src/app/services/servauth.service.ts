import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class ServauthService {

 
  domain = 'http://localhost:1212';
  authTokenl;
  serv;
  headers;
  options;

  constructor(private  _http : Http) { }

  createAuthenticationHeaders(){

    //Call back function
    this.loadToken();

    //create header for send bit meta-data with http request to the server
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('authorization' , this.authTokenl);

    //create object RequestOptions  and pass header
     this.options = new RequestOptions({headers:this.headers});

      this.options = new RequestOptions({
        headers: new  Headers({
          'Content-Type': 'application/json',
          'authorization' : this.authTokenl
        })
      });

  }
  //load token of current user logged-in from localstorage
  loadToken(){
    this.authTokenl = localStorage.getItem('token');
  }

  //communicate with  api and map
  registerSurv(serv){
    return this._http.post(this.domain + '/authentication/svregister' , serv )
               .map(res =>res.json() );
  }

  //check username, current username already taken or not
  checkUsername(username){
    return this._http.get(this.domain + '/authentication/checkUsernamesv/'+username )
      .map(res =>res.json() );
  }

  //check email id, current email already taken or not
  checkEmail(email){
    return this._http.get(this.domain + '/authentication/checkEmailsv/'+email )
      .map(res =>res.json() );
  }

  //communicate with login api and map
  loginSurv(serv){
    return this._http.post(this.domain + '/authentication/svlogin', serv )
               .map(res=>res.json());
  }

  logoutSurv(){
    this.authTokenl = null;
    this.serv = null;
    localStorage.clear();
  }

  //stored data(token and username) in local storage
  storeSurvData(token,serv){
    localStorage.setItem('token',token);
    localStorage.setItem('surv',JSON.stringify(serv));
    this.authTokenl = token;
    this.serv = serv;
  }
//getting current profile info
getProfile(){
  this.createAuthenticationHeaders();
  console.log("her");
  return this._http.get(this.domain + '/authentication/profilesv' , this.options)
             .map(res=>res.json() );
}

 //angular2 jwt, check the user login
  loggedIn() {
    return tokenNotExpired();
  }


}


