import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from '../services.service';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-customerotpverification',
  templateUrl: './customerotpverification.component.html',
  styleUrls: ['./customerotpverification.component.css']
})
export class CustomerotpverificationComponent implements OnInit {

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
    
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async otpSubmit(otpForm: any) {
    const enteredOTP = otpForm.otp;

    await this.service.fetchOtp(enteredOTP)
      .then((data: any) => {
        console.log('API Response:', data);

        if (data.otp == enteredOTP) {
          this.toastr.success('OTP Verified. Registration Successful', 'Success');
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 1000); 
        } else {
          console.log('Invalid OTP');
          this.toastr.error('Invalid OTP', 'Error');
        }
      })
      .catch((error: any) => {
        console.log('Error:', error.message);
        this.toastr.error('Error during OTP verification', 'Error');
      });
  }

}