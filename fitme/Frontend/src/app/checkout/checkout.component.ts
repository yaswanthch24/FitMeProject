import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  total: any;
  handler: any = null;
  cartItems: any;
  products: any;

  constructor(private route: ActivatedRoute , private router : Router , private toastr : ToastrService , private service : ServicesService) { 

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.total = params['total'];
      if (this.total) {
        this.loadStripe();
      }
    });
  }

  pay() {
    console.log('Total:', this.total);
    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: (token: any) => {
        console.log(token);
        alert('Payment Success!!');
        this.router.navigate(['home']);
        this.toastr.success("Your Payment Was Successfully Processed" , 'Success');
      }
    });
  
    handler.open({
      name: 'Fit Me',
      description: 'Payment Gateway',
      amount: this.total * 100 
    });
  }
  
  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'auto',
          token: (token: any) => {
            console.log(token);
            alert('Payment Success!!');
            this.router.navigate(['home']);
            this.toastr.success("Your Payment Was Successfully Processed" , 'Success');
          }
        });
      };

      window.document.body.appendChild(s);
    }
  }
}
