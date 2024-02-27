import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bmical',
  templateUrl: './bmical.component.html',
  styleUrl: './bmical.component.css'
})
export class BmicalComponent {
  
  weight: any;
  height: any;
  bmiResult: any;
  bmiCategory: any;

  calculateBMI() {
    if (this.weight && this.height) {
      const heightInMeters = this.height / 100;
      this.bmiResult = this.weight / (heightInMeters * heightInMeters);
      this.determineCategory();
    }
  }

  determineCategory() {
    if (this.bmiResult < 18.5) {
      this.bmiCategory = 'Underweight';
    } else if (this.bmiResult >= 18.5 && this.bmiResult < 25) {
      this.bmiCategory = 'Normal weight';
    } else if (this.bmiResult >= 25 && this.bmiResult < 30) {
      this.bmiCategory = 'Overweight';
    } else {
      this.bmiCategory = 'Obese';
    }
  }
  
}

