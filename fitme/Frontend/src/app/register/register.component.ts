import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  countries: any;
  customer: any;
  confirmPassword: string = '';
  
  constructor(private service: ServicesService, private router: Router, private toastr: ToastrService) {
    this.customer = {
      customerName: '',
      gender: '',
      country: '',
      emailId: '',
      password: '',
      phoneNumber: '',
    };
  }

  ngOnInit() {
    this.service.getAllCountries().subscribe((data: any) => { this.countries = data; });
  }

  showPassword: boolean = false; 
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  showConfirmPassword: boolean = false;
  toggleconfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  registerSubmit(regForm: any) {
    if (this.customer.password == this.confirmPassword) {
      this.customer.customerName = regForm.customerName;
      this.customer.gender = regForm.gender;
      this.customer.country = regForm.country;
      this.customer.emailId = regForm.emailId;
      this.customer.password = regForm.password;
      this.customer.phoneNumber = regForm.phoneNumber;
      console.log(this.customer);
      this.service.regsiterCustomer(this.customer).subscribe((data: any) => {
        console.log('Registration successful:', data);
        this.toastr.success('Registration Successful', 'Success'); 
        this.router.navigate(['customerotpverification']); 
      });
    } else {
      console.log('Password and Confirm Password must be the same.');
      this.toastr.error('Registration failed');
    }
  }
  
}