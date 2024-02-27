import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-gymequipments',
  templateUrl: './gymequipments.component.html',
  styleUrl: './gymequipments.component.css'
})
export class GymequipmentsComponent {

  products: any;
  emailId: any;
  selectedProduct: any;
  cartProducts: any;


  constructor(private service: ServicesService) {

    this.emailId = localStorage.getItem('emailId');
    this.cartProducts = [];
    this.products = [

      {
        id: 131,
        name: 'The Cube Club Heavy Duty Foldable Gym Bench ',
        description: 'The Cube Club traditional home gym bench is well made and sturdy with high-quality materials',
        price: 8999,
        imageUrl: 'https://m.media-amazon.com/images/I/31UoaXu2sHL._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id: 132,
        name: 'FYA Automatic Rebound Abdominal Wheel Kit',
        description: 'The non-slip roller provides a comfortable and secure grip during your workouts.',
        price: 2799,
        imageUrl: 'https://m.media-amazon.com/images/I/41MG3pKe3-L._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id: 133,
        name: 'PRO365 Push Up Board ',
        description: 'The push-up board combines science, ergonomics and joint health, is stable and safe',
        price: 239,
        imageUrl: 'https://m.media-amazon.com/images/I/51kX4njOSdL._SY300_SX300_QL70_FMwebp_.jpg'
      },
      {
        id: 134,
        name: 'Fitness Equipment Sit-ups and Push-ups ',
        description: 'Sleeted super-elastic wear-resistant eco-friendly foam material, comfortable and safe',
        price: 479,
        imageUrl: 'https://m.media-amazon.com/images/I/41ScCpd5JbL._SY300_SX300_QL70_FMwebp_.jpg'
      },
      {
        id: 135,
        name: 'One Pair Dumbbell Rods with Gym Accessories',
        description: ' gym gloves + 1 Gym backpack + 1 Skipping Rope + 1 Hand Gripper + 2Locks and clippers ',
        price: 1239,
        imageUrl: 'https://m.media-amazon.com/images/I/81XNzjmXi+L._SX679_.jpg'
      },
      {
        id: 136,
        name: 'Boldfit Pull Up Bars For Home Workout   ',
        description: 'This pull bar for home gym is made with high strength carbon steel to withstand capacity.',
        price: 1499,
        imageUrl: 'https://m.media-amazon.com/images/I/41E8KxK-vGL._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id: 137,
        name: 'Bodyband Hand Grip Workout Strengthener ',
        description: 'The hand Gripper is suitable for everyone, like Athletes, sports, fitness coaches, fitness.',
        price: 153,
        imageUrl: 'https://m.media-amazon.com/images/I/41+hCQ3EraL._SY300_SX300_.jpg'
      },
      {
        id: 138,
        name: 'Lifelong PVC Hex Dumbbells Pack of 2 ',
        description: 'These durable hand weights are the perfect addition to aerobics and step workouts',
        price: 239,
        imageUrl: 'https://m.media-amazon.com/images/I/31Y1HG9d-DL._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id: 139,
        name: 'Rope and Loading Pin for Hand Exercise ',
        description: 'Protective black paint finish: The forearms workout equipment is duly finished ',
        price: 799,
        imageUrl: 'https://m.media-amazon.com/images/I/21aw0V6VDnL._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id: 140,
        name: 'Strauss Wrist/Forearm Strengthener ',
        description: 'MATERIAL - Strauss Forearm Exerciser is made of a spring-loaded steel core, covered with a soft foam.',
        price: 329,
        imageUrl: 'https://m.media-amazon.com/images/I/61+hMEfHEcL._SL1500_.jpg'
      },
      {
        id: 141,
        name: 'beatXP WindClaw Spin Exercise Bike',
        description: ' In this spin bike, you can customize wheel resistance to have real-time road riding experience.',
        price: 9999,
        imageUrl: 'https://m.media-amazon.com/images/I/41WW2Kmr88L._SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id: 142,
        name: 'Treadmill with Free Customized Diet Plan',
        description: 'Free Diet & Fitness Plan for 3 month along with 1 Doctor Consultation & Trainer Led Session.',
        price: 12239,
        imageUrl: 'https://m.media-amazon.com/images/I/31EC+q-1UJL._SY300_SX300_.jpg'
      },
      {
        id: 143,
        name: 'Leg Exerciser Tummy Trimmer Sport Fitness',
        description: 'Upgraded Foot Pedal Design- Widening and lengthening contoured foot pedals, provide you a comfortable exercise experience.',
        price: 349,
        imageUrl: 'https://m.media-amazon.com/images/I/71GA1SFN+KL._SL1500_.jpg'
      },
      {
        id: 144,
        name: 'Fitness Equipment Sit-ups and Push-ups ',
        description: 'Small occupation, easy to install and disassemble, quickly assembly simply take a few minutes, convenient to use.',
        price: 239,
        imageUrl: 'https://m.media-amazon.com/images/I/41ScCpd5JbL._SY300_SX300_QL70_FMwebp_.jpg'
      },
      {
        id: 145,
        name: 'WiseLife 3 Tier Dumbbell Holder Rack | Compact Dumbbell Holder For Home Gym Exercise',
        description: 'The rack is super compact and doesnt take much space. The durable stand creates a convenient way ',
        price: 499,
        imageUrl: 'https://m.media-amazon.com/images/I/41Baxng2QdL._SX679_.jpg'
      },
    ]
  }
  ngOnInit() {
  }
  addToCart(product: any) {
    this.service.addToCart(product);
  }
}
