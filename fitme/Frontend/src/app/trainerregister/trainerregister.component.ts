import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trainerregister',
  templateUrl: './trainerregister.component.html',
  styleUrls: ['./trainerregister.component.css']
})
export class TrainerregisterComponent {

  countries: any;
  trainer: any;
  confirmPassword: string = '';

  constructor(private service: ServicesService, private router: Router, private toastr: ToastrService) {
    this.trainer = {
      trainerName: '',
      gender: '',
      country: '',
      emailId: '',
      password: '',
      phoneNumber: '',
      pincode: '' 
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
    if (this.trainer.password == this.confirmPassword ) {
      this.trainer.trainerName = regForm.trainerName;
      this.trainer.gender = regForm.gender;
      this.trainer.country = regForm.country;
      this.trainer.emailId = regForm.emailId;
      this.trainer.password = regForm.password;
      this.trainer.phoneNumber = regForm.phoneNumber;
      this.trainer.pincode = regForm.pincode; 

      console.log(this.trainer);
      
      this.service.regsiterTrainer(this.trainer).subscribe((data: any) => {
        console.log('Registration successful:', data);
        this.toastr.success('Registration Successful', 'Success');
        this.toastr.error('Verify Otp');
        this.router.navigate(['trainerotpverification']);
      });
    } else {
      console.log('Password and Confirm Password must be the same.');
      this.toastr.error('Registration failed');
    }
  }
}