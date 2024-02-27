import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrl: './yoga.component.css'
})
export class YogaComponent {
  products: any;
  emailId: any;
  selectedProduct: any;
  cartProducts: any;


  constructor(private service: ServicesService) {

    this.emailId = localStorage.getItem('emailId');
    this.cartProducts = [];
    this.products = [
      {
        id: 116,
        name: 'Yoga Mat for Women and Men Fitness(SIZE-4mm) Thick & Large',
        description: 'ECO-EVA MATERIAL: Made of EVA foam which offers good cushioning for added comfort.',
        price: 699,
        imageUrl: 'https://m.media-amazon.com/images/I/51AT09suYwL._SX679_.jpg'
      },
      {
        id: 117,
        name: 'Yoga Block (2 PC)-High Density EVA Foam Block to Support and Deepen Poses',
        description: 'Deepens, elongate your stretches and aligns your posture perfectly, fit for all fitness levels.',
        price: 599,
        imageUrl: 'https://m.media-amazon.com/images/I/41J6+n7GZ0L.jpg'
      },
      {
        id: 118,
        name: 'royalkart The Sole Care Silicone Toe Seperators; Toe Correctors For Overlapping Toes',
        description: 'Reusable- Toe seperators are reusable as they are washable.Just wash it with water and let it air dry and reuse again.',
        price: 319,
        imageUrl: 'https://m.media-amazon.com/images/I/31j4Wt8rq2L._SY445_SX342_QL70_FMwebp_.jpg'
      },
      {
        id: 119,
        name: 'Aegon Foot Stretcher Strap | Calf Stretcher for Plantar Fasciitis | Ligament Stretching | Leg Stretching Strap Belt ',
        description: ' Unique Patented design of foot and calf stretcher with 6 Hand Loops provide different stretching levels,',
        price: 296,
        imageUrl: 'https://m.media-amazon.com/images/I/4147CGe-rzL._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id: 120,
        name: 'Bodylastics Yoga Wheel for Women and Men Fitness 13” Strong',
        description: 'The Bodylastics cooling towel is made of super ice hyper-evaporative breathable material. Working on the physical evaporation of moisture',
        price: 1999,
        imageUrl: 'https://m.media-amazon.com/images/I/71t5abAU1EL._SX679_.jpg'
      },
      {
        id: 121,
        name: 'Boldfit Heavy Resistance Band for Workout Set Exercise & Stretching Pull Up Bands for Home Exercise',
        description: 'The Stretching Band For Workout / Workout Bands Can Be Used To Exercise All Parts Of Muscles Such As Arms',
        price: 1020,
        imageUrl: 'https://m.media-amazon.com/images/I/514zFaqlxpL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg'
      },
      {
        id: 122,
        name: 'Pravyta Sit-Up Bar Home Fitness Equipment Sit-ups and Push-ups',
        description: 'Selected super-elastic wear-resistant eco-friendly foam material, comfortable and safe,',
        price: 489,
        imageUrl: 'https://m.media-amazon.com/images/I/61bkkWFnJ0L._SX679_.jpg'
      },
      {
        id: 123,
        name: 'ODDISH; way to fitness Oddish Anti Skid Double Wheel Total Body AB Roller Exerciser',
        description: 'making it an ideal fitness tool for anyone looking to enhance their abdominal and overall body strength.',
        price: 299,
        imageUrl: 'https://m.media-amazon.com/images/I/41sMYYyK0LL._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id: 124,
        name: 'FITSY Cotton Nylon Blended Elastic 8 Loops Stretching Strap for Yoga, Pilates, Exercise',
        description: 'Our stretching exercise straps are made of high quality cotton nylon blend, that makes it soft to touch.',
        price: 229,
        imageUrl: 'https://m.media-amazon.com/images/I/413qQuUs5yL._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id: 125,
        name: 'Boldfit Gym Ball for Exercise Anti Burst Exercise Ball with Foot Pump for Workout Yoga Ball for Women and Men',
        description: ' This exercise ball gym is usable in multiple exercise like pilates, yoga, stretching etc. Use this in workouts of shoulders, arms',
        price: 799,
        imageUrl: 'https://m.media-amazon.com/images/I/612c8i-J3dL._SX679_.jpg'
      },
      {
        id: 126,
        name: 'Consonantiam Tummy Trimmer Stomach and Equipment with Chest Expander Rope Workout Pulling Exerciser',
        description: 'Its solid yet smooth handles give excellent grip and keep hands from slipping. The contoured peddles give you the right balance and support',
        price: 399,
        imageUrl: 'https://m.media-amazon.com/images/I/41-s3-HVbtL.jpg'
      },
      {
        id: 127,
        name: 'Qauda Mens Performance Training Tights for Gym Yoga Sports Compression Running Leggings Gym Workout Tights Base Layer Pants',
        description: 'Soft, wide, no-dig waistband wont slip down or ride up while you are training.Creates a slimming silhouette and is very flattering on the figure. ',
        price: 392,
        imageUrl: 'https://m.media-amazon.com/images/I/51UHjqKiPcL._SX679_.jpg'
      },
      {
        id: 128,
        name: 'ReDesign Apparels Men Slim Fit Sports T-Shirt',
        description: 'Nylon compression provides more oxygen filled blood to active muscles, increasing endurance, power, efficiency and encourages recovery after hard workouts.',
        price: 1020,
        imageUrl: 'https://m.media-amazon.com/images/I/41yGSxO93ZL._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id: 129,
        name: 'ReDesign Premium Compression Arm Sleeves Pair (Nylon) For Gym,',
        description: 'Quick-Dry Technology: Moisture-wicking fabric ensures rapid drying, keeping you cool and comfortable during intense workouts',
        price: 399,
        imageUrl: 'https://m.media-amazon.com/images/I/71GzeWufeKL._SX679_.jpg'
      },
      {
        id: 130,
        name: 'WORK FOR IT Men Polyester Compression Sports Shorts Half Tights',
        description: 'This ergonomically crafted compression wear is designed for athletes, focusing on improving blood circulation,stabalizing muscles',
        price: 239,
        imageUrl: 'https://m.media-amazon.com/images/I/81Pad457EYL._SX679_.jpg'
      },
    ]
  }
  ngOnInit() {
  }

  addToCart(product: any) {
    this.service.addToCart(product);
  }

}
