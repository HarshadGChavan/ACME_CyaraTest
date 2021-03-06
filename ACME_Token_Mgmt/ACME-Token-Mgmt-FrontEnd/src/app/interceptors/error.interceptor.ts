import { error } from 'selenium-webdriver';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {


  constructor(private router: Router, private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error){
          console.log('Error Status: ' + error.status);
          switch (error.status) {
            case 400:
              if (error.error.errors){
                const modalStateErrors = [];
                for (const key in error.error.errors){
                  if (error.error.errors[key]){

                    modalStateErrors.push(error.error.errors[key]);
                  }
                }

                this.toastr.error(modalStateErrors[0], error.status);
              }
              else{
                console.log('inside if else');
                console.log(error);
                console.log('d');
                this.toastr.error(error.error, error.status);
              }
              break;
            case 401:
              this.toastr.error(error.error, error.status);
              break;
            case 404:
              this.router.navigateByUrl('/not-found');
              break;
            case 500:
              const navigationExtras: NavigationExtras = {state: {error: error.error}};
              this.router.navigateByUrl('/server-error', navigationExtras);
              break;
            default:
              this.toastr.error('Something unexpected gone wrong!');
              console.log(error);
              break;
          }
        }
        return throwError(error);
      }
     )
    );
  }
}
