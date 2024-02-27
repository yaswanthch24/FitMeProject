import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {

  experience : any;
  currentYear : any;
  joinYear : any;

  transform(value: any): any {
    
    this.currentYear = new Date().getFullYear();
    this.joinYear = new Date(value).getFullYear();
    this.experience = this.currentYear - this.joinYear;
    return this.experience;
  }

}
