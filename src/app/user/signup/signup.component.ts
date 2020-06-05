import { Component, OnInit,ViewContainerRef} from '@angular/core';
import {AppService} from './../../app.service'
import {Router} from '@angular/router'
//toastr
//import {ToastsManager} from 'ng2-toastr/ng2-toastr'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public firstName:any
  public lastName:any
  public mobile:any
  public email:any
  public password:any
  public apiKey:any

  constructor(
    public appService:AppService,
    public router:Router,
   /* public toastr:ToastsManager,*/
    vcr:ViewContainerRef
  ) { }

  ngOnInit(): void {
  }
  public goToSignIn:any=()=>{
    this.router.navigate(['/'])
  }//end to signin
  public signupFunction:any=()=>{
    if(!this.firstName){
      //this.toastr.warning("enter your first name")
      alert("enter your first name")

    }else if(!this.lastName){
      //this.toastr.warning("enter your lat name")
      alert("enter your last name")
    }else if(!this.mobile){
     //this.toastr.warning("enter mobile no.")
     alert("enter mobile no.")
    }else if(!this.email){
     // this.toastr.warning("enter your email")
     alert("enter your email")
    }else if(!this.password){
      //this.toastr.warning("enter your password")
      alert("enter your password")
    }else if(!this.apiKey){
      //this.toastr.warning("enter your apikey")
      alert("enter your apikey")
    }else{
      let data = {
        firstName:this.firstName,
        lastName:this.lastName,
        mobile:this.mobile,
        email:this.email,
        password:this.password,
        apiKey:this.apiKey
      }
      console.log(data)
      this.appService.signupFunction(data)
        .subscribe((apiResponse)=>{
          console.log(apiResponse);
          if (apiResponse.status===200){
            //this.toastr.success('Signup successfuly')
            alert("sign up sucessful")
            setTimeout(()=>{
              this.goToSignIn();

            },2000)
          }
          else{
            //this.toastr.error(apiResponse.message)
            alert(apiResponse.message)
          }
        },(err)=>{
          //this.toastr.error('some error occoured')
          console.log(err)
          alert('some error occoured')
        });
      }
      }
    }