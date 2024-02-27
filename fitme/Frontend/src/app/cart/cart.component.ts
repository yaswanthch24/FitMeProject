
import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  localStorageData: any;
  emailId: any;
  total: any;
  cartItems: any;
  products: any;

  constructor(private service: ServicesService, private router: Router) {
    this.cartItems = service.getCartItems();
    this.total = 0;
    this.emailId = localStorage.getItem('emailId');
    this.products = service.getCartItems();
    if (this.products) {
      this.products.forEach((element: any) => {
        this.total = this.total + parseInt(element.price, 10);
      });
    } else {
      console.error('this.products is undefined or null. Make sure it is properly initialized.');
    }
  }

  ngOnInit() {
  }

  deleteCartProduct(product: any) {
    const i = this.products.findIndex((element: any) => {
      return element.id == product.id;
    });
    this.products.splice(i, 1);
    this.total = this.total - product.price;
  }

  purchase() {
    this.products = [];
    this.service.clearCartItems();
    this.router.navigate(['checkout', this.total]);
  }

}
