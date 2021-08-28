import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminLoginService } from '../service/admin-login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public adminLoginService: AdminLoginService,
    private router: Router,
    private toaster: ToastrService)  { }

  ngOnInit(): void {
  }

    // tslint:disable-next-line: typedef
  login(){
    console.log(this.model);
    this.adminLoginService.login(this.model).subscribe(response => {
      console.log('Inside Nav ROute');

    // tslint:disable-next-line: no-shadowed-variable
    });
    this.router.navigate(['tokenManager']);
  }

  // tslint:disable-next-line: typedef
  logout(){
    this.adminLoginService.logout();
    this.router.navigateByUrl('/');
  }


}
