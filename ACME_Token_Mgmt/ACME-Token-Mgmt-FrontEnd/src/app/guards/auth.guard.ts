import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AdminLoginService } from '../service/admin-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private adminLoginService: AdminLoginService, private toastr: ToastrService) {}
  canActivate(): Observable<boolean> {
    return this.adminLoginService.currentUser$.pipe(
      map(user => {
        if (user) {return true; }
        this.toastr.error('Please login with admin user!');
      })
    );
  }

}
