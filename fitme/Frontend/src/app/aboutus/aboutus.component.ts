import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  emailId: any;
  password: any;

  constructor(private router: Router, private toastr: ToastrService) { 

  }

  ngOnInit() {
    
   }

  submit() {
    console.log("EmailId : " + this.emailId);
    console.log("Password: " + this.password);
  }

  loginSubmit(loginForm: any) {
    console.log(loginForm);
    console.log("EmailId : " + loginForm.emailId);
    console.log("Password: " + loginForm.password);
    this.toastr.success('Login Successful!', 'Success', {
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      tapToDismiss: false,
      timeOut: 3000 
    });
  }

}
