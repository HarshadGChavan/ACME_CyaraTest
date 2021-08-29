import { Component, OnInit } from '@angular/core';
import { TokenManageService } from '../service/token-manage.service';
import { tokenACME } from '../_models/tokenACME';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-token-validator',
  templateUrl: './token-validator.component.html',
  styleUrls: ['./token-validator.component.css']
})
export class TokenValidatorComponent implements OnInit {
  tokenName : string;
  constructor(private tokenManageService: TokenManageService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  validateToken(token:any){
    this.tokenManageService.validateToken(token).subscribe(token =>
      {
      console.log('Token validated!');
      console.log(token);
      this.toastr.info("Token is valid!");
      });
  }

}
