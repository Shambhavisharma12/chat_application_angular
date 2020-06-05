import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent} from './user-details/user-details.Component'
import {FormsModule} from '@angular/forms'
import { FirstCharComponent} from './first-char/first-char.Component';
//import { RemoveSpecialCharPipe } from './pipe/remove-special-char.pipe'
  




@NgModule({
  declarations: [UserDetailsComponent,FirstCharComponent/*, RemoveSpecialCharPipe*/],
  exports:[
    UserDetailsComponent,
    FirstCharComponent,
    CommonModule,
    FormsModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
