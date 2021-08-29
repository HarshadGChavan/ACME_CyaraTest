import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { tokenACME } from './../_models/tokenACME';

@Injectable({
  providedIn: 'root'
})

export class TokenManageService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

   // tslint:disable-next-line: typedef
   getTokens(){
    return this.http.get<tokenACME[]>(this.baseUrl + 'api/token');
   }

   // tslint:disable-next-line: typedef
   generateToken(){
    return this.http.post<tokenACME>(this.baseUrl + 'api/token',null);
   }

   // tslint:disable-next-line: typedef
   updateToken(token:tokenACME){
    return this.http.put<tokenACME>(this.baseUrl + 'api/token',token);
   }

   // tslint:disable-next-line: typedef
   validateToken(token:any){
    let tokenPass:tokenACME = new tokenACME();
    tokenPass.token = token;
    return this.http.post(this.baseUrl + 'api/token/validate',tokenPass);
   }


}
