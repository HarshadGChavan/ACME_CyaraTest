import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  No: number;
  token: string;
  expiry: string;
  active: boolean;
}

 @Component({
  selector: 'app-token-manager',
  templateUrl: './token-manager.component.html',
  styleUrls: ['./token-manager.component.css']
})
export class TokenManagerComponent implements AfterViewInit {
  displayedColumns: string[] = ['No', 'token', 'expiry', 'active'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    const users = [
      {No: 1, token: 'Hydrogen', expiry: "10 Aug 2021", active: true},
      {No: 2, token: 'Helium', expiry: "10 Aug 2021", active: true},
      {No: 3, token: 'Lithium', expiry: "10 Aug 2021", active: true},
      {No: 4, token: 'Beryllium', expiry: "10 Aug 2021", active: true},
      {No: 5, token: 'Boron', expiry: "10 Aug 2021", active: true},
      {No: 6, token: 'Carbon', expiry: "10 Aug 2021", active: true}
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  changed(token:string){
    console.log(token);
    alert(token);
  }
}

/** Builds and returns a new User. */
// function createNewUser(No: number): UserData {
//   const token = tokenS[Math.round(Math.random() * (tokenS.length - 1))] + ' ' +
//     tokenS[Math.round(Math.random() * (tokenS.length - 1))].charAt(0) + '.';

//   return {
//     No: No.toString(),
//     token: token,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
//   };
// }
