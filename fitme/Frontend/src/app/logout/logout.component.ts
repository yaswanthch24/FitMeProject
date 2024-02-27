import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private service: ServicesService) {
    localStorage.removeItem('emailId');
    localStorage.clear();
    this.service.setIsUserLoggedOut();
    alert('Successfully Logged Out');
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
