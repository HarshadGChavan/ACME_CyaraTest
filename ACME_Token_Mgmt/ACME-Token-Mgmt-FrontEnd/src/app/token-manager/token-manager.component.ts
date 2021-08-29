
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { TokenManageService } from './../service/token-manage.service';
import { tokenACME } from './../_models/tokenACME';


 @Component({
  selector: 'app-token-manager',
  templateUrl: './token-manager.component.html',
  styleUrls: ['./token-manager.component.css']
})
export class TokenManagerComponent implements AfterViewInit {

  displayedColumns: string[] = ['token', 'expiry', 'active'];
  dataSource: MatTableDataSource<tokenACME>;
  tokens: tokenACME[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private tokenManageService: TokenManageService) {
    // Assign the data to the data source for the table to render
    this.getAllTokens();
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllTokens(){
    this.tokenManageService.getTokens().subscribe(tokens =>
      {
      this.tokens = tokens;
      console.log('printing current tokens-- ');
      console.log(this.tokens);
      this.datasourceConfig();
      });
  }

  datasourceConfig()
  {
    this.dataSource = new MatTableDataSource(this.tokens);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createToken()
  {
    this.tokenManageService.generateToken().subscribe(token =>
      {
      console.log('Token Created!');
      console.log(token);
      this.getAllTokens();
      });
  }

  updateToken(token:tokenACME){
    console.log(token);
    this.tokenManageService.updateToken(token).subscribe(token =>
      {
      console.log('Token updated!');
      console.log(token);
      this.getAllTokens();
      });
  }
}
