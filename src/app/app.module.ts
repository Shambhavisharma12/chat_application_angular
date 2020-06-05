import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router"
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import {LoginComponent} from "./user/login/login.component"
//from stackoverflow
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';
//import { UserDetailsComponent } from './shared/user-details/user-details.component';
//import { FirstCharComponent } from './shared/first-char/first-char.component'
//import {HttpErrorResponse,HttpParams} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
   // UserDetailsComponent,
    //FirstCharComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    UserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'login',component:LoginComponent,pathMatch:'full'},
      {path: '',redirectTo: 'login',pathMatch:'full'},
      {path: '*',component:LoginComponent},
      {path:'**',component:LoginComponent}
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
