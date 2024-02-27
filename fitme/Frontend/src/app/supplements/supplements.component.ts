import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-supplements',
  templateUrl: './supplements.component.html',
  styleUrl: './supplements.component.css'
})
export class SupplementsComponent {
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
        description: 'The perfect morning routine. 63+ vitamins, minerals, adaptogens, probiotics',
        price: 1020,
        imageUrl: 'https://www.thegoodstuff.co/cdn/shop/files/CTLG-IMG_786x978_2606e46f-4a9d-4913-bffd-1c3c5b7bac77.jpg?v=1703835576&width=700'
      },
      {
        id : 102,
        name: 'GNC AMP Pure Isolate',
        description: 'Advanced Muscle Building To Amplify Muscle Performance | Informed Choice Certified',
        price: 6499,
        imageUrl: 'https://www.guardian.in/cdn/shop/files/Pure-Isolate-BB4lbs_Creatine_100g.png?v=1706794792&width=800'
      },
      {
        id : 103,
        name: 'GNC Mega Men Sport Multivitamin',
        description: 'Supports Muscle Performance & Recovery | Made For Fitness Lifestyle Sport Multivitamin',
        price: 3499,
        imageUrl: 'https://www.guardian.in/cdn/shop/files/90200084-1_c57c6b2f-fd51-472a-ae45-c0e6ab0b3b7c.jpg?v=1694086378&width=800'
      },
      {
        id : 104,
        name: 'Kobra Labs The Bull Weight Gainer',
        description: 'Kobra Labs The Bull Mass Gainer Is Available In Kesar Pista Flavored.Bull Weight Gainer',
        price: 999,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTv7ONDvPVL6WDQbhN4TA5Kfu_8cFr7lhDfRdoUabrCM1_TKNLE6VCq27kxfzCaCoUfP8_tK1NsEkR02zYJz69Gwp9uwqGa9UoxhzsSyiHyhKh4NztIetKC0ztD&usqp=CAE'
      },
      {
        id : 105,
        name: 'NMN UTHEVER 1000-World Purest NMN-500mg, 60 Veg Capsules',
        description: 'Decode Age NMN Uthever® is a derivative of the B3-vitamin niacin ',
        price: 2999,
        imageUrl: 'https://decodeage.com/cdn/shop/files/capsule-nmn-uthever-1000-world-s-best-and-purest-nmn-supplement-to-boost-nad-60-veg-capsules-decode-age-36206483570876.webp?v=1702446275&width=800'
      },
      {
        id : 106,
        name: 'Muscleblaze Beginners protein Jar Pack',
        description: 'DELICIOUS CHOCOLATE FLAVOUR: Fulfil your protein intake with MuscleBlaze Beginners',
        price: 1499,
        imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTc_C87-AueXPMxa0ElVHcf9O_aKHrQSL4_3Hw2nz6K3TniPU5mc9s_DoNhIj0WBTmELKbEOqfOl8UDHORY8GExb_xZA5xiSwjeLJ_j21wTI1DLPHp5-MAF&usqp=CAE'
      },
      {
        id : 107,
        name: 'Best Choice Nutrition Grow Body Capsule ',
        description: 'Composition Is Na. Model Name Is Grow Body Capsule For Weight Gain And Muscle Building  Nutrition Grow Body capsule',
        price: 199,
        imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUUjYIo-pO5SmAp8iUE_7ZS-S3wdGGEA3ydPQekUwt2Kx4d7Yp6VXYAXT24RWdtt-85Kumkc0U7YKgSsSYvbMwGZtqoqX7e2WeDwOp18Ni8G-OYMAbQgiR&usqp=CAE'
      },
      {
        id : 108,
        name: 'Wellcore Micronised Creatine Monohydrate',
        description: 'Micronized Formula For Enhanced Absorption: Wellcore Micronised Creatine Monohydrate Supplement Contains 3 Gm Of Pure ',
        price: 1499,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTY2AtAiP_hKVAFMbwgkWLelJm7i7ZGHzn7QLGDZSgjDpLgk_D00M3qPSzk7mr_aCdX-SQ2OGn7eH1OilVhskaayS46rRXzuQ&usqp=CAE'
      },
      {
        id : 109,
        name: 'Pehlwaan Whey Protein | 1 kg ',
        description: 'Elevate your fitness journey with Pehlwaan Whey Protein by Prince Narula. Each scoop packs 24g of muscle-nourishing protein ',
        price: 2899,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSf5Wha1jbccyOI5G-Wfr5bmq8Dr31G9f1EX0e0sNAY1uybySEV8TBGNbJrATFs53Uc9okJoEvtuxsMbd9G8kyt94bYKDrMdXMXqk8B5HkfFkqjC1ebDD0v-oY&usqp=CAE'
      },
      {
        id : 110,
        name: 'Myprotein Alpha Pre-Workout | 30 servings ',
        description: 'Myprotein’s Alpha Pre-Workout contains a whopping 200mg of caffeine per serving. Caffeine helps improve your endurance performance and capacity1',
        price: 1999,
        imageUrl: 'https://supplemartf.b-cdn.net/wp-content/uploads/2023/12/13665156-6645083314636945-800x800.png'
      },
      {
        id : 111,
        name: 'Dexter Jackson Signature Series Energizer, 60 servings',
        description: 'Energizer rocked the pre workout world by delivering INSANE energy without the dreaded crash. ',
        price: 2449,
        imageUrl: 'https://supplemartf.b-cdn.net/wp-content/uploads/2022/02/energizer3.jpg'
      },
      {
        id : 112,
        name: 'Condemned Labz Convict Pre-Workout | 50 Servings',
        description: 'Extreme athletes demand the most from their bodies on a daily basis, and to support the intense rigors of training',
        price: 2299,
        imageUrl: 'https://supplemartf.b-cdn.net/wp-content/uploads/2022/11/convictstim-pre-workout-condemned-labz-blueberry-lemonade-410635_800x-1-768x768.webp'
      },
      {
        id : 113,
        name: 'HealthFarm Muscle Whey Protein Isolate & Concentrate',
        description: 'When it comes to selecting the best whey protein supplement, HealthFarm Muscle stands out as a trusted brand ',
        price: 1899,
        imageUrl: 'https://healthfarmnutrition.com/cdn/shop/files/02_1_95b9fc61-d772-40af-b794-2e7c2556a757.jpg?v=1706004227&width=750'
      },
      {
        id : 114,
        name: 'Asitis Whey Protein (1kg)',
        description: 'Whey Protein is the protein derived from milk during the cheese making process. It has high levels of essential amino acids and BCAA.',
        price: 2099,
        imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTFgl6srVXj2I8nUnyEvMJkM9Kuic2enkF5zsMOxk-yczwTavlk4C070UsFI8XhcUOou0rr14x17Raa7DmZNDJatKEqurgEtZ0LwuHoHdZlzyU8BmYanuDFdg&usqp=CAE'
      },
      {
        id : 115,
        name: 'Muscleblaze Beginners protein Jar Pack,',
        description: 'DELICIOUS CHOCOLATE FLAVOUR: Fulfil your protein intake with MuscleBlaze Beginners Whey Protein now available in Jar pack also. ',
        price: 1499,
        imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTc_C87-AueXPMxa0ElVHcf9O_aKHrQSL4_3Hw2nz6K3TniPU5mc9s_DoNhIj0WBTmELKbEOqfOl8UDHORY8GExb_xZA5xiSwjeLJ_j21wTI1DLPHp5-MAF&usqp=CAE'
      }
    ];
  }

  ngOnInit() {
  }
  addToCart(product:any){
    this.service.addToCart(product);
  }


}
