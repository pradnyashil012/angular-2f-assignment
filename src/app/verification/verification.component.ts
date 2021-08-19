import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  formGroup!: FormGroup;
  token: String | undefined;

  constructor(private authService:AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      token: new FormControl('',[Validators.required])
    })
  }

  verificationProcess(){
    if(this.formGroup.valid) {
      this.authService.confirm(this.formGroup.value).subscribe(result => { 
        
        this.goToWelcome();
      },
      error => {
        console.log(error); 
      }
      
      );
    }
  }

  goToWelcome(){
    this.router.navigate(['/welcome']);
  }

}
