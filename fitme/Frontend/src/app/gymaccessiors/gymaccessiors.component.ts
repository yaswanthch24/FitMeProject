import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-gymaccessiors',
  templateUrl: './gymaccessiors.component.html',
  styleUrl: './gymaccessiors.component.css'
})
export class GymaccessiorsComponent {
  products: any;
  emailId: any;
  selectedProduct: any;
  cartProducts: any;


  constructor(private service: ServicesService) {

    this.emailId = localStorage.getItem('emailId');
    this.cartProducts = [];
    this.products = [

      {
        id: 146,
        name: 'Aurion Fitness ',
        description: 'Aurion Fitness 1.5" Premium Genuine Leather Lifting Wrist Straps for Men and Women Wrist Support 19" in Length',
        price: 399,
        imageUrl: 'https://m.media-amazon.com/images/I/71xjbryHc1L._SX679_.jpg'
      },
      {
        id: 147,
        name: 'Boldfit Cotton Wrist Band',
        description: 'Boldfit Cotton Wrist Band for Men & Women, Wrist Supporter for Gym Wrist Wrap/Straps Gym Accessories for Men',
        price: 199,
        imageUrl: 'https://m.media-amazon.com/images/I/516dWCmT47L._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id: 148,
        name: ' Weight Lifting Belt 10mm Thickness ',
        description: 'Ultra-durable dual prong steel buckle secures tensioning to maintain a snug fit  Weight Lifting Belt Thickness',
        price: 1009,
        imageUrl: 'https://m.media-amazon.com/images/I/51pBY8GAI6S._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id: 149,
        name: 'Hansaplast Active Lace Pull LS Support ',
        description: 'Anatomically designed for comfort fit | Adjustable Belt for coustom fit & support.',
        price: 1699,
        imageUrl: 'https://m.media-amazon.com/images/I/41XSRxHgARL._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id: 150,
        name: 'Hansaplast Active Tennis Elbow ',
        description: 'Recommended by the Indian Association of Physiotherapists. | Dermatologically Tested and skin ',
        price: 359,
        imageUrl: 'https://m.media-amazon.com/images/I/81C2+CoRIeL._SX679_.jpg'
      },
      {
        id: 151,
        name: 'Careforce Elbow Support For Gym Elbow Band ',
        description: 'The Hook and Loop straps allow you to adjust the fit for staying in place securely and feeling comfortable',
        price: 499,
        imageUrl: 'https://m.media-amazon.com/images/I/41jbe-EoO5L._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id: 152,
        name: 'Serveuttam® Elbow Support for Gym ',
        description: 'An excellent Elbow Sleeve that has combined feature of and Polyester, Spandex',
        price: 259,
        imageUrl: 'https://m.media-amazon.com/images/I/71oRq1f6QqL._SX679_.jpg'
      },
      {
        id: 153,
        name: 'GAMMA FITNESS Commercial Squat Rack',
        description: 'Manufactured with 12 gauge ISI grade 4 x 2 inches heavy commercial frame and panels Laser Cutting panels ',
        price: 34999,
        imageUrl: 'https://m.media-amazon.com/images/I/41eZbnPudOL._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id: 154,
        name: 'WiseLife 3 Tier Dumbbell Holder Rack ',
        description: 'The rack is super compact and doesnt take much space. The durable stand creates a convenient way  ',
        price: 499,
        imageUrl: 'https://m.media-amazon.com/images/I/41Baxng2QdL._SX679_.jpg'
      },
      {
        id: 155,
        name: 'Aurion Weight Band 5 KG X 2 (Black)',
        description: 'The Skudgear Wrist/Ankle weights are ergonomically designed to provide a good fit and do not slip  ',
        price: 1099,
        imageUrl: 'https://m.media-amazon.com/images/I/910-udfRyiL._SX679_.jpg'
      },
      {
        id: 156,
        name: 'FOAM HAND GRIP',
        description: 'Amongst various types of hand grips available in the market, the foam hand grip is effective and popular equipment ',
        price: 739,
        imageUrl: 'https://www.fitness-world.in/wp-content/uploads/2019/04/FITNESS-WORLD-FOAM-HAND-GRIP-570x5701-1.jpg'
      },
      {
        id: 157,
        name: 'Hykes Knee cap Compression Support ',
        description: 'This knee brace support designed with the perfect blend of breathable material providing excellent support. ',
        price: 799,
        imageUrl: 'https://m.media-amazon.com/images/I/51z6YMT6+LL._SY300_SX300_.jpg'
      },
      {
        id: 158,
        name: 'Shopoflux® Heavy Duty Handles ',
        description: 'The sturdiness and multi-functionality of these cable handles make it a great addition to any commercial or personal gym.',
        price: 569,
        imageUrl: 'https://m.media-amazon.com/images/I/71smZSHTxAS._SX679_.jpg'
      },
      {
        id: 159,
        name: 'Abs Roller Wheel',
        description: 'Abdominal wheel is suitable for abdominal muscles and other lower and upper limb muscles! This will ensure that your spine is properly aligned',
        price: 1149,
        imageUrl: 'https://m.media-amazon.com/images/I/51esEJ37zuL._SL1200_.jpg'
      },
      {
        id: 160,
        name: 'Fashnex Resistance Bands Set for Exercise',
        description: 'Our bands can apply to different types exercise. Coaches can use our resistance bands Set to create effective fitness & weight loss programs',
        price: 699,
        imageUrl: 'https://m.media-amazon.com/images/I/514XLvQHhVL._SY300_SX300_QL70_FMwebp_.jpg'
      },

    ]
  }
  ngOnInit() {
  }
  addToCart(product: any) {
    this.service.addToCart(product);
  }
}
