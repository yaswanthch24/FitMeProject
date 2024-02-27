import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-trainerforgotpassword',
  templateUrl: './trainerforgotpassword.component.html',
  styleUrl: './trainerforgotpassword.component.css'
})
export class TrainerforgotpasswordComponent {

  trainer : any;
  protected aFormGroup: FormGroup;

  constructor(private router : Router , private toastr : ToastrService , private service: ServicesService, private formBuilder: FormBuilder){
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  ngOnInit() {
    
  }

  forgotpasswordSubmit(forgotpasswordForm : any){
    this.service.fetchEmailId(forgotpasswordForm.emailId)
      .then((data: any) => {
        console.log(data);
        this.trainer = data;
        console.log('Otp successful:', data);
        this.toastr.success('Otp sent to Registered Mail', 'Success'); // Display toastr message on success
        this.router.navigate(['trainerupdatepassword']);
      })
      .catch((error: any) => {
        console.log(error.message); // Handle error here
      });

  }

}