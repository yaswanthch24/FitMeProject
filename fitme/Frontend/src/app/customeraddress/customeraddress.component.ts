import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customeraddress',
  templateUrl: './customeraddress.component.html',
  styleUrl: './customeraddress.component.css'
})
export class CustomeraddressComponent {

  selectedEmailId: string = '';
  selectedAddress: string = '';

  constructor(private route: ActivatedRoute, private service: ServicesService, private router: Router, private toastr: ToastrService) { 

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedEmailId = params['emailId'];
    });
  }

  submitForm() {
    const trainerDetails = {
      emailId: this.selectedEmailId,
      address: this.selectedAddress
    };
    this.service.address(trainerDetails).subscribe((response: any) => {
      console.log(response); 
    });
    this.toastr.success('Mail Sent Successful', 'Success');
    this.router.navigate(['/home'])
  }
}

