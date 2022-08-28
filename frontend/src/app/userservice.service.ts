import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {


  constructor(public http:HttpClient) { }
  
 
  submitUser(form){
    return this.http.post("http://localhost:3000/api/submit",form);
  }

  validUser(email){
    return this.http.get("http://localhost:3000/api/valid/"+email);
  }
}
