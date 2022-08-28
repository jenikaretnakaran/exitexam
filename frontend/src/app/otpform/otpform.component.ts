import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otpform',
  templateUrl: './otpform.component.html',
  styleUrls: ['./otpform.component.css']
})
export class OtpformComponent implements OnInit {

  form:FormGroup;
  email;
  otp;
  constructor(private userservice:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.form= new FormGroup
    (
      {
        otp:new FormControl("",Validators.required),
        text:new FormControl("",Validators.required)
      }
    );
  }

  onGenerate(form){
      this.email=localStorage.getItem("email");
      this.userservice.validUser(this.email)
      .subscribe((res)=>{
      this.otp=res.toString();
      // console.log(form.otp);
      if(this.otp===form.otp){
         this.router.navigate(['/']);
      }
      else{
        alert("invalid OTP");
      }

     
    })
  }

}


