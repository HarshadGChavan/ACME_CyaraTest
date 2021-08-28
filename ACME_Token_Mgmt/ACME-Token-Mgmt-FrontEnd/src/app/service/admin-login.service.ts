import { adminUser } from './../_models/adminUser';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  baseUrl = environment.apiUrl;
  private currentUsreSource = new ReplaySubject<adminUser>(1);
  currentUser$ = this.currentUsreSource.asObservable();

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  login(model: any){
    return this.http.post(this.baseUrl + 'api/AdminLogin', model).pipe(
      map((response: adminUser) => {
        const adminUser = response;
        console.log('Response');
        if (adminUser){
          localStorage.setItem('adminUser', JSON.stringify(adminUser));
          this.currentUsreSource.next(adminUser);
          console.log(adminUser);
        }
      })
    );
  }

  // tslint:disable-next-line: typedef
  setCurrentUser(adminUser: adminUser){
    this.currentUsreSource.next(adminUser);
  }

  // tslint:disable-next-line: typedef
  logout()
  {
    localStorage.removeItem('adminUser');
    this.currentUsreSource.next(null);
  }

}
