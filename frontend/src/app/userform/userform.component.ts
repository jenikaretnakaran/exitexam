import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  form:FormGroup;

  constructor(private userservice:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.form= new FormGroup
    (
      {
        emailId: new FormControl("",Validators.compose([Validators.required,Validators.email])),
        text:new FormControl("",Validators.required)
      }
    );
  }

  onSubmit(form){
    localStorage.setItem("email",form.emailId)
    return this.userservice.submitUser(form)
    .subscribe(res=>{
      console.log(res);
      this.router.navigate(['/otpform'])
    })
   
  }

}
