import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../service/admin-login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public adminLoginService: AdminLoginService) { }

  ngOnInit(): void {
  }

}
