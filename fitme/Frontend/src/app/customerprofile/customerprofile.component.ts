import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

declare var jQuery: any;

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrl: './customerprofile.component.css'
})

export class CustomerprofileComponent implements OnInit {

  customers: any;
  emailId: any;
  countries: any;
  editCustomers: any;

  constructor(private service: ServicesService) {
    this.emailId = localStorage.getItem('emailId');
    this.editCustomers = {
      customerId: '',
      customerName: '',
      emailId: '',
      phoneNumber: '',
      gender: '',
    };
  }

  ngOnInit() {
    this.service.getAllCustomers().subscribe((data: any) => {
      this.customers = data.filter((customer: { emailId: any; }) => customer.emailId === this.emailId);
    });
    this.service.getAllCountries().subscribe((data: any) => { this.countries = data; });
  }

  editCustomer(customer: any) {
    console.log(customer);
    this.editCustomers = customer;
    jQuery('#myModal').modal('show');
  }

  updateCustomer() {
    console.log(this.editCustomers);
    this.service.updateCustomer(this.editCustomers).subscribe((data: any) => { console.log(data); });
  }

  deleteCustomer(customer: any) {
    this.service.deleteCustomer(customer.customerId).subscribe((data: any) => { console.log(data); });
    const i = this.customers.findIndex((element: any) => {
      return element.customerId == customer.customerId;
    });
    alert('customer Data Deleted Successfully!!');
    this.customers.splice(i, 1);
  }

}

