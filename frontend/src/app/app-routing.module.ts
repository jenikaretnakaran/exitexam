import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpformComponent } from './otpform/otpform.component';
import { UserformComponent } from './userform/userform.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = 
[
 {path:"",component:WelcomeComponent},
 {path:"userform",component:UserformComponent},
 {path:"otpform",component:OtpformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
