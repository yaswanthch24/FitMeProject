import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-trainerotpverification',
  templateUrl: './trainerotpverification.component.html',
  styleUrl: './trainerotpverification.component.css'
})
export class TrainerotpverificationComponent implements OnInit{

  aFormGroup: any;
  showPassword: boolean = false;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private service: ServicesService,
    private formBuilder: FormBuilder
  ) {
    this.aFormGroup = this.formBuilder.group({
    
    });
  }

  ngOnInit() {
    // Initialize any component-specific tasks
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async otpSubmit(otpForm: any) {
    const enteredOTP = otpForm.otp;
  
    await this.service.getOtp(enteredOTP)
      .then((data: any) => {
        console.log('API Response:', data);
  
        if (data.otp ==  enteredOTP) {
          // OTP verification successful
          this.toastr.success('OTP Verified. Registration Successful', 'Success');
          // Introduce a delay or use a promise here if needed
          setTimeout(() => {
            this.router.navigate(['trainerlogin']);
          }, 1000); // Example delay of 1 second
        } else {
          // OTP verification failed, handle accordingly
          console.log('Invalid OTP');
          this.toastr.error('Invalid OTP', 'Error');
          // You might want to clear the form or display an error message to the user
        }
      })
      .catch((error: any) => {
        console.log('Error:', error.message);
        // Handle error here
        this.toastr.error('Error during OTP verification', 'Error');
      });
  }
  
}