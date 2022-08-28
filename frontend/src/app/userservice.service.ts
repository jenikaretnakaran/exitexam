import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {


  constructor(public http:HttpClient) { }
  
 
  submitUser(form){
    return this.http.post("api/submit",form);
  }

  validUser(email){
    return this.http.get("api/valid/"+email);
  }
}
