import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  {
    path:'', 
    component:LoginComponent
  },
  {
    path:'verification',
    component:VerificationComponent
  },
  {
    path:'welcome',
    component:ThankyouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
