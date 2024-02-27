import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  products: any;
  emailId: any;
  selectedProduct : any;
  cartProducts : any;


  constructor(private service :ServicesService) {

    this.emailId = localStorage.getItem('emailId');
    this.cartProducts = [];
    this.products = [
      {
        id : 101,
        name: 'Supply6 360',
        description: 'The perfect morning routine. 63+ vitamins, minerals, adaptogens, probiotics, berries and greens for a happy and healthy life!',
        price: 1020,
        imageUrl: 'https://www.thegoodstuff.co/cdn/shop/files/CTLG-IMG_786x978_2606e46f-4a9d-4913-bffd-1c3c5b7bac77.jpg?v=1703835576&width=700'
      },
      {
        id : 102,
        name: 'GNC AMP Pure Isolate (Low/Zero Carb)',
        description: 'Advanced Muscle Building To Amplify Muscle Performance | Informed Choice Certified',
        price: 6499,
        imageUrl: 'https://www.guardian.in/cdn/shop/files/Pure-Isolate-BB4lbs_Creatine_100g.png?v=1706794792&width=800'
      },
      {
        id : 103,
        name: 'GNC Mega Men Sport Multivitamin',
        description: 'Supports Muscle Performance & Recovery | Made For Fitness Lifestyle',
        price: 3499,
        imageUrl: 'https://www.guardian.in/cdn/shop/files/90200084-1_c57c6b2f-fd51-472a-ae45-c0e6ab0b3b7c.jpg?v=1694086378&width=800'
      },
      {
        id : 104,
        name: 'Kobra Labs The Bull Mass Gainer Weight Gainer',
        description: 'Kobra Labs The Bull Mass Gainer Is Available In Kesar Pista Flavored. The Bull Mass Gainer Is A Protein Supplement That Helps You Gain Muscle Mass.',
        price: 999,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTv7ONDvPVL6WDQbhN4TA5Kfu_8cFr7lhDfRdoUabrCM1_TKNLE6VCq27kxfzCaCoUfP8_tK1NsEkR02zYJz69Gwp9uwqGa9UoxhzsSyiHyhKh4NztIetKC0ztD&usqp=CAE'
      },
      {
        id : 105,
        name: 'NMN UTHEVER 1000 - World Purest NMN - 500mg, 60 Veg Capsules',
        description: 'Decode Age NMN Uthever® is a derivative of the B3-vitamin niacin that significantly improves health and longevity by serving as a precursor to NAD+.',
        price: 2999,
        imageUrl: 'https://decodeage.com/cdn/shop/files/capsule-nmn-uthever-1000-world-s-best-and-purest-nmn-supplement-to-boost-nad-60-veg-capsules-decode-age-36206483570876.webp?v=1702446275&width=800'
      },
      {
        id : 106,
        name: 'Muscleblaze Beginners protein Jar Pack',
        description: 'DELICIOUS CHOCOLATE FLAVOUR: Fulfil your protein intake with MuscleBlaze Beginners Whey Protein now available in Jar pack also. ',
        price: 1499,
        imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTc_C87-AueXPMxa0ElVHcf9O_aKHrQSL4_3Hw2nz6K3TniPU5mc9s_DoNhIj0WBTmELKbEOqfOl8UDHORY8GExb_xZA5xiSwjeLJ_j21wTI1DLPHp5-MAF&usqp=CAE'
      },
      {
        id : 116,
        name: 'Yoga Mat for Women and Men Fitness(SIZE-4mm) Thick & Large',
        description: 'ECO-EVA MATERIAL: Made of EVA foam which offers good cushioning for added comfort.',
        price: 699,
        imageUrl: 'https://m.media-amazon.com/images/I/51AT09suYwL._SX679_.jpg'
      },
      {
        id : 117,
        name: 'Yoga Block (2 PC)-High Density EVA Foam Block to Support and Deepen Poses',
        description: 'Deepens, elongate your stretches and aligns your posture perfectly, fit for all fitness levels.',
        price: 599,
        imageUrl: 'https://m.media-amazon.com/images/I/41J6+n7GZ0L.jpg'
      },
      {
        id : 118,
        name: 'royalkart The Sole Care Silicone Toe Seperators; Toe Correctors For Overlapping Toes',
        description: 'Reusable- Toe seperators are reusable as they are washable.Just wash it with water and let it air dry and reuse again.',
        price: 319,
        imageUrl: 'https://m.media-amazon.com/images/I/31j4Wt8rq2L._SY445_SX342_QL70_FMwebp_.jpg'
      },
      {
        id : 119,
        name: 'Aegon Foot Stretcher Strap | Calf Stretcher for Plantar Fasciitis | Ligament Stretching | Leg Stretching Strap Belt ',
        description: ' Unique Patented design of foot and calf stretcher with 6 Hand Loops provide different stretching levels,',
        price: 296,
        imageUrl: 'https://m.media-amazon.com/images/I/4147CGe-rzL._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id : 120,
        name: 'Bodylastics Yoga Wheel for Women and Men Fitness 13” Strong',
        description: 'The Bodylastics cooling towel is made of super ice hyper-evaporative breathable material. Working on the physical evaporation of moisture',
        price: 1999,
        imageUrl: 'https://m.media-amazon.com/images/I/71t5abAU1EL._SX679_.jpg'
      },
      {
        id : 121,
        name: 'Boldfit Heavy Resistance Band for Workout Set Exercise & Stretching Pull Up Bands for Home Exercise',
        description: 'The Stretching Band For Workout / Workout Bands Can Be Used To Exercise All Parts Of Muscles Such As Arms',
        price: 1020,
        imageUrl: 'https://m.media-amazon.com/images/I/514zFaqlxpL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg'
      },
      {
        id : 146,
        name: 'Aurion Fitness 1.5" Premium Genuine Leather Lifting Wrist Straps for Men and Women Wrist Support 19" in Length',
        description: 'he design allows for convenient portability and storage. It can be used during workouts, as well as during recovery and rehabilitation phases..',
        price: 399,
        imageUrl: 'https://m.media-amazon.com/images/I/71xjbryHc1L._SX679_.jpg'
      },
      {
        id : 147,
        name: 'Boldfit Cotton Wrist Band for Men & Women, Wrist Supporter for Gym Wrist Wrap/Straps Gym Accessories for Men',
        description: 'Be Sure About Durability Since These Are Top Class Straps with Premium Stitching And Washable Material Used In This.',
        price: 199,
        imageUrl: 'https://m.media-amazon.com/images/I/516dWCmT47L._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id : 148,
        name: 'Wearslim® Professional Genuine Leather Weight Lifting Belt 10mm Thickness | 4 Inches Wide',
        description: 'Ultra-durable dual prong steel buckle secures tensioning to maintain a snug fit. Prong buckle helps you cinch and keep the belt in place; makes putting on and taking off a belt a breeze',
        price: 1009,
        imageUrl: 'https://m.media-amazon.com/images/I/51pBY8GAI6S._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id : 149,
        name: 'Hansaplast Active Lace Pull LS Support for Men & Women | Lower Back Support Belt for Long Lasting Pain Relief & Stability | Lumbo Sacral Support Adjustable Belt ',
        description: 'Anatomically designed for comfort fit | Adjustable Belt for coustom fit & support.',
        price: 1699,
        imageUrl: 'https://m.media-amazon.com/images/I/41XSRxHgARL._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id : 150,
        name: 'Hansaplast Active Tennis Elbow Support for Men & Women | Tennis Elbow Brace with visible Pressure Pad for Long Lasting Pain Relief ',
        description: 'Recommended by the Indian Association of Physiotherapists. | Dermatologically Tested and skin friendly, non-irritant to the skin.',
        price: 359,
        imageUrl: 'https://m.media-amazon.com/images/I/81C2+CoRIeL._SX679_.jpg'
      },
      {
        id : 151,
        name: 'Careforce Elbow Support For Gym Elbow Band For Pain Relief Tennis Elbow Band For Men & Women',
        description: 'The Hook and Loop straps allow you to adjust the fit for staying in place securely and feeling comfortable while doing many activities',
        price: 499,
        imageUrl: 'https://m.media-amazon.com/images/I/41jbe-EoO5L._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id : 131,
        name: 'The Cube Club Heavy Duty Foldable Gym Bench Multipurpose Full Body Workout Weight Bench Press for Men & Women',
        description: 'The Cube Club traditional home gym bench is well made and sturdy with high-quality materials. Perfect for building your own home gym',
        price: 8999,
        imageUrl: 'https://m.media-amazon.com/images/I/31UoaXu2sHL._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id : 132,
        name: 'FYA Automatic Rebound Abdominal Wheel Kit, Elbow Support Ab Roller Workout Equipment ',
        description: 'The non-slip roller provides a comfortable and secure grip during your workouts. It is also noise-free, ensuring a quiet exercise experience, preventing any damage to your floors',
        price: 2799,
        imageUrl: 'https://m.media-amazon.com/images/I/41MG3pKe3-L._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id : 133,
        name: 'PRO365 Push Up Board For Men & Women Performance Board Training Equipment ',
        description: 'The push-up board combines science, ergonomics and joint health, is stable and safe, and can help you increase and shape your muscles efficiently and scientifically.',
        price: 239,
        imageUrl: 'https://m.media-amazon.com/images/I/51kX4njOSdL._SY300_SX300_QL70_FMwebp_.jpg'
      },
      {
        id : 134,
        name: 'SILENCIO Sit-Up Bar With Foam Handle and Rubber Suction Seat Up Fitness Equipment Sit-ups and Push-ups ',
        description: 'Sleeted super-elastic wear-resistant eco-friendly foam material, comfortable and safe, protect the instep from pain, as well as not hurt your foot.',
        price: 479,
        imageUrl: 'https://m.media-amazon.com/images/I/41ScCpd5JbL._SY300_SX300_QL70_FMwebp_.jpg'
      },
      {
        id : 135,
        name: 'Kore PVC 10-40 Kg Home Gym Set with One 3 Ft Curl and One Pair Dumbbell Rods with Gym Accessories',
        description: '100 percent percent leather gym gloves + 1 Gym backpack + 1 Skipping Rope + 1 Hand Gripper + 2Locks and clippers comes with the rods',
        price: 1239,
        imageUrl: 'https://m.media-amazon.com/images/I/81XNzjmXi+L._SX679_.jpg'
      },
      {
        id : 136,
        name: 'Boldfit Pull Up Bars For Home Workout -Chin Up Bar Gym Accessories for Men Door  ',
        description: 'This pull bar for home gym is made with high strength carbon steel to withstand capacity. Pull ups rod exercise helps in support for doing intense body workout at home',
        price: 1499,
        imageUrl: 'https://m.media-amazon.com/images/I/41E8KxK-vGL._SX300_SY300_QL70_FMwebp_.jpg'
      },

    ]
  }
  ngOnInit() {
  }
  addToCart(product:any){
    this.service.addToCart(product);
  }
}
