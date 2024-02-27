import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent implements OnInit{

  customers: any;
  trainers: any;
  emailId: any;
  customerCount: any;
  trainerCount : any;
  showCustomerTableFlag: boolean = false;
  showTrainerTableFlag: boolean = false;

  constructor(private service : ServicesService){
    this.emailId = localStorage.getItem('emailId');
  }

  ngOnInit() {
    this.service.getAllCustomers().subscribe((data:any) => { this.customers = data });
    this.service.getAllTrainers().subscribe((data : any) =>{ this.trainers = data });
    this.service.countCustomers().subscribe((data : any) =>{this.customerCount = data});
    this.service.countTrainers().subscribe((data : any) => {this.trainerCount = data});
  }

  showCustomerTable() {
    this.service.getAllCustomers
    this.showCustomerTableFlag = true;
    this.showTrainerTableFlag = false;
  }

  showTrainerTable() {
    this.service.getAllTrainers
    this.showTrainerTableFlag = true;
    this.showCustomerTableFlag = false;
  }

deleteTrainer(trainer: any) {
  console.log('trainer details',trainer);
  this.service.deleteTrainer(trainer.trainerId).subscribe((data: any) => {console.log(data);});
  const i = this.trainers.findIndex((element: any) => {
    return element.trainerId == trainer.trainerId;
  });

  this.trainers.splice(i, 1);

  alert('Employee Deleted Successfully!!!');
}

}