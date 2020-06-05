import { Component, OnInit,ViewContainerRef} from '@angular/core';
import {AppService} from './../../app.service'
import {Cookie} from 'ng2-cookies/ng2-cookies'
import {Router} from '@angular/router'
//toaster
//import {ToastsManager} from 'ng2-toastr/ng2-toastr'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:any
  public password:any

  constructor( public appService:AppService,
    public router:Router,
   /* public toastr:ToastsManager,*/
    vcr:ViewContainerRef) { }

  ngOnInit(): void {
  }
  public goToSignIn:any=()=>{
    this.router.navigate(['/sign-up'])
  }
  public signinFunction:any=()=>{
    if(!this.email){
      //this.toastr.warning("enter your first name")
      alert("enter your email")

    }else if(!this.password){
      //this.toastr.warning("enter your lat name")
      alert("enter your password")
    }
    else{
    let data = {
      email:this.email,
      password:this.password,
    }
    
    this.appService.signinFunction(data)
    .subscribe((apiResponse)=>{
      
      if (apiResponse.status===200){
        console.log(apiResponse);
        Cookie.set('authtoken',apiResponse.data.authtoken)
        Cookie.set('receiverId',apiResponse.data.userDetails.userId)
        Cookie.set('receiverName',apiResponse.data.userDetails.firstName+''+apiResponse.data.userDetails.lastName)
        this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails)
        this.router.navigate(['/chat'])
      }
    
      else{
        alert(apiResponse.message)
      }
  },(err)=>{
    alert("some error occourd")}
    )}
}
}


