import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] 
})
export class NavbarComponent {
  loginStatus: any;
  cartItems : any;
  constructor(private router: Router , private service: ServicesService ) {
    this.cartItems=service.getCartItems();
  }

  ngOnInit() {
    this.service.getLoginStatus().subscribe((data: any) => {
      this.loginStatus = data;
    });
  }

  navigateTocustomerLogin(): void {
    this.router.navigateByUrl('/login'); 
  }

  navigateTotrainerLogin(): void{
    this.router.navigateByUrl('/trainerlogin');
  }

  navigateToSupplements() : void{
    this.router.navigateByUrl('/supplements');
  }

  navigateToGymEquipment():void{
    this.router.navigateByUrl('/gymequipment');
  }

  navigateToGymAccessiors():void{
    this.router.navigateByUrl('/gymaccessiors');
  }

  navigateToYoga():void{
    this.router.navigateByUrl('/yoga');
  }

  navigateToCart():void{
    this.router.navigateByUrl('/cart');
  }

  navigateToBookTrainer() :void{
    this.router.navigateByUrl('/booktrainer');
  }

  navigateToHome(): void {
    this.router.navigateByUrl('/home')
  }

  navigateToCustomer(): void {
    this.router.navigateByUrl('/customer');
  }

  navigateToAboutus(): void {
    this.router.navigateByUrl('/aboutus')
  }

  navigateToBmi():void{
    this.router.navigateByUrl('/bmi')
  }

  navigateToDiet():void{
    this.router.navigateByUrl('/diet')
  }

  isNavbarContentOpen = false;
  currentSection: any;

  openNavbarContent(section: any) {
    this.isNavbarContentOpen = true;
    this.currentSection = section;
  }

  closeNavbarContent() {
    this.isNavbarContentOpen = false;
  }

  navigateTo(path: any) {
    this.router.navigate([path])
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const modalContainer = document.querySelector('.modal-container');
    const openButtons = document.querySelectorAll('.open-button');

    let clickInsideButton = false;
    openButtons.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickInsideButton = true;
      }
    });
    if (modalContainer && !clickInsideButton && this.isNavbarContentOpen) {
      this.closeNavbarContent();
    }
  }
}
