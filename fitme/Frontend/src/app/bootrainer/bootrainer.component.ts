import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bootrainer',
  templateUrl: './bootrainer.component.html',
  styleUrl: './bootrainer.component.css'
})
export class BootrainerComponent implements OnInit {

  trainerPincode: any;
  formModel: any = { pincode: '' };
  trainers: any[] | undefined;

  constructor(private service: ServicesService, private router: Router) {
  }

  ngOnInit() {
  }

  getTrainers() {
    this.service.getTrainerByPincode(this.formModel.pincode).subscribe((data: any) => {
      this.trainers = Array.isArray(data) ? data : [data];  // Ensure workers is an array
      console.log(this.trainers);
    });
  }

  @Output() bookNowClicked: EventEmitter<string> = new EventEmitter<string>();

  bookNow(emailId: string) {
    console.log('Book-Now Clicked. Navigating to Address Component.');
    this.bookNowClicked.emit(emailId);
    this.router.navigate(['/address', { emailId: emailId }]);
  }

}

