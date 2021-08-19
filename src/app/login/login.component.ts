import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private authService:AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required])
    })
  }

  loginProcess(){
    if(this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(result => {
            console.log(result.message);  
            this.goToVerification();
          
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      
      );
    }
  }

  goToVerification(){
    this.router.navigate(['/verification']);
  }

}
