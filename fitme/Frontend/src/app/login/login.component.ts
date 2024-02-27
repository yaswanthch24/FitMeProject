import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected aFormGroup: FormGroup;

  isCaptchaValid: boolean = false;
  captchaResolved: boolean = false;
  siteKey: string = "6LfTj2gpAAAAABa17_-TWUraXZG9HfTsmIAFCkmQ";

  customer: any;
  captchaCompleted: boolean = false;

  constructor(private router: Router, private service: ServicesService, private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  showPassword: boolean = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit() {
  }

  onCaptchaResolved(event: any) {
    this.isCaptchaValid = true;
    this.captchaResolved = true;
  }

  handleCaptchaComplete() {
    this.isCaptchaValid = true;
    this.captchaResolved = true;
  }

  async loginSubmit(loginForm: any) {
    if (loginForm.emailId == 'admin@gmail.com' && loginForm.password == 'Admin@123') {
      this.service.setIsUserLoggedIn();
      localStorage.setItem("emailId", loginForm.emailId);
      this.router.navigate(['adminhome']);
    } else {
      this.customer = null;

      await this.service.customerLogin(loginForm.emailId, loginForm.password).then((data: any) => {
        console.log(data);
        this.customer = data;
      });

      if (this.customer != null) {
        this.service.setIsUserLoggedIn();
        localStorage.setItem("emailId", loginForm.emailId);
        this.toastr.success('Login Successful', 'Success');
        console.log("success");
        this.router.navigate(['home']);
      } else {
        this.toastr.error("Invalid Credentials");
      }
    }
  }
}