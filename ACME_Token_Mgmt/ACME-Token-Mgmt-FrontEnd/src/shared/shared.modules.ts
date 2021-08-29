import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
// import { TabsModule } from 'ngx-bootstrap/tabs';
// import { NgxSpinnerModule } from 'ngx-spinner';
// import {PaginationModule} from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [],
  imports:[
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
    // TabsModule.forRoot(),
    // NgxSpinnerModule,
    // PaginationModule.forRoot()
  ],
  exports:[
    BsDropdownModule,
    ToastrModule,
    // TabsModule,
    // NgxSpinnerModule,
    // PaginationModule
  ]
})

export class SharedModule { }
