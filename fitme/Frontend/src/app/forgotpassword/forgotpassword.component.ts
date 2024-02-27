import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent implements OnInit {

  customer : any;

  constructor(private router : Router , private toastr : ToastrService , private service: ServicesService, private formBuilder: FormBuilder){
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  ngOnInit() {
    
  }

  forgotpasswordSubmit(forgotpasswordForm : any){
    this.service.getEmailId(forgotpasswordForm.emailId)
      .then((data: any) => {
        console.log(data);
        this.customer = data;
        console.log('otp successful:', data);
        this.toastr.success('Otp sent to Regsitered Mail', 'Success'); 
        this.router.navigate(['customerupdatepassword']);
      })
      .catch((error: any) => {
        console.log(error.message); 
      });
      if(forgotpasswordForm.emailId == console.log(this.customer.emailId)){}
  }

  protected aFormGroup: FormGroup;

}