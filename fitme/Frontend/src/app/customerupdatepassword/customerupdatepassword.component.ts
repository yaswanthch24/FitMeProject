import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-customerupdatepassword',
  templateUrl: './customerupdatepassword.component.html',
  styleUrls: ['./customerupdatepassword.component.css']
})
export class CustomerupdatepasswordComponent implements OnInit {
  aFormGroup: any;
  showPassword: boolean = false;

  constructor(private router: Router, private toastr: ToastrService, private service: ServicesService, private formBuilder: FormBuilder) {
    this.aFormGroup = this.formBuilder.group({
      otp: ['', Validators.required],  
      password: ['', Validators.required],  
    });
  }

  ngOnInit() {
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async otpSubmit(otpForm: any) {
    const enteredOTP = otpForm.otp;
    const newPassword = otpForm.password;

    try {
      const data = await this.service.updatePassword(newPassword, enteredOTP);
      console.log('API Response:', data);
      if (data.otp == otpForm.otp) {
        this.toastr.success('Password updated successfully', 'Success');
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 1000);
      } else {
        console.log('Error response:', data);
        console.log('Invalid OTP or other error');
        this.toastr.error('Invalid OTP or other error', 'Error');
      }
    } catch (error) {
      console.log('Error:');
      this.toastr.error('Error during password update', 'Error');
    }
  }
}