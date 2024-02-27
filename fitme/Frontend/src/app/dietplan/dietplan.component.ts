import { Component } from '@angular/core';

interface Meal {
  day: string;
  breakfast: string;
  lunch: string;
  snacks: string;
  dinner: string;
}

interface DietPlans {
  obese: Meal[];
  overweight: Meal[];
  underweight: Meal[];
  normal: Meal[];
}

@Component({
  selector: 'app-dietplan',
  templateUrl: './dietplan.component.html',
  styleUrl: './dietplan.component.css'
})
export class DietplanComponent {
  healthStatus: keyof DietPlans = 'obese'; // Default health status

  dietPlans: DietPlans = {
    'obese': [
      { day: 'Monday', breakfast: 'Idli (brown rice), sambar/ 2 whole eggs + toast', lunch: 'Whole grain roti + mixed vegetable / chicken', snacks: '5 almonds + unsweetened tea or coffee', dinner: 'Soup with sauteed veg / chicken pulao + curd' },
      {
        day: "Tuesday",
        breakfast: "Atta or moong dal chilla/ scrambled eggs + toast",
        lunch: "Brown rice + gravy sabzi or paneer / vegetable salad",
        snacks: "Fruits + unsweetened tea or coffee",
        dinner: "Dal ka chilla with grilled paneer or fish / chicken"
      },
      {
        day: "Wednesday",
        breakfast: "Porridge / fruits with milk/ yogurt/vegetable omelet",
        lunch: "Whole grain roti + paneer / vegetable salad + chicken roti wrap",
        snacks: "2 dates + 5 walnuts buttermilk + unsweetened tea or coffee",
        dinner: "Tandoori paneer or fish / chicken + vegetable pulao"
      },
      {
        day: "Thursday",
        breakfast: "Oats and yogurt/vegetable omelet",
        lunch: "Whole grain roti + gravy sabzi/chicken + soup",
        snacks: "5 almonds +5 dates + unsweetened tea or coffee",
        dinner: "Brown rice + masala chana/chicken + fish"
      },
      {
        day: "Friday",
        breakfast: "Daliya / French toast",
        lunch: "Whole grain roti + vegetable / sauteed chicken + chicken roti wrap",
        snacks: "5 almonds +2 dates + unsweetened tea or coffee",
        dinner: "Vegetable pulao + dal + curry with quinoa"
      },
      {
        day: "Saturday",
        breakfast: "Parathas/ egg + toast",
        lunch: "Sambar and rice",
        snacks: "Fruits + unsweetened tea or coffee",
        dinner: "Dinner (same as Monday)"
      },
      {
        day: "Sunday",
        breakfast: "Oats with milk and fruits",
        lunch: "Dinner (same as Tuesday)",
        snacks: "Yogurt with fruits",
        dinner: "Dinner (same as Wednesday)"
      }

    ],
    'overweight': [
      {
        day: "Monday",
        breakfast: "Idli (brown rice), sambar/ 2 whole eggs + toast",
        lunch: "Whole grain roti + mixed vegetable / chicken",
        snacks: "5 almonds + unsweetened tea or coffee",
        dinner: "Soup with sauteed veg / chicken pulao + curd"
      },
      {
        day: "Tuesday",
        breakfast: "Atta or moong dal chilla/ scrambled eggs + toast",
        lunch: "Brown rice + gravy sabzi or paneer / vegetable salad",
        snacks: "Fruits + unsweetened tea or coffee",
        dinner: "Dal ka chilla with grilled paneer or fish / chicken"
      },
      {
        day: "Wednesday",
        breakfast: "Porridge / fruits with milk/ yogurt/vegetable omelet",
        lunch: "Whole grain roti + paneer / vegetable salad + chicken roti wrap",
        snacks: "2 dates + 5 walnuts buttermilk + unsweetened tea or coffee",
        dinner: "Tandoori paneer or fish / chicken + vegetable pulao"
      },
      {
        day: "Thursday",
        breakfast: "Oats and yogurt/vegetable omelet",
        lunch: "Whole grain roti + gravy sabzi/chicken + soup",
        snacks: "5 almonds +5 dates + unsweetened tea or coffee",
        dinner: "Brown rice + masala chana/chicken + fish"
      },
      {
        day: "Friday",
        breakfast: "Daliya / French toast",
        lunch: "Whole grain roti + vegetable / sauteed chicken + chicken roti wrap",
        snacks: "5 almonds +2 dates + unsweetened tea or coffee",
        dinner: "Vegetable pulao + dal + curry with quinoa"
      },
      {
        day: "Saturday",
        breakfast: "Parathas/ egg + toast",
        lunch: "Sambar and rice",
        snacks: "Fruits + unsweetened tea or coffee",
        dinner: "Same as Monday"
      },
      {
        day: "Sunday",
        breakfast: "Oats with milk and fruits",
        lunch: "Same as Tuesday",
        snacks: "Yogurt with fruits",
        dinner: "Same as Wednesday"
      }
    ],
    'underweight': [
      {
        day: "Monday",
        breakfast: "Banana smoothie with protein powder and spinach",
        lunch: "Chicken breast with roasted vegetables and brown rice",
        snacks: "Greek yogurt with berries and granola",
        dinner: "Salmon with quinoa and steamed broccoli"
      },
      {
        day: "Tuesday",
        breakfast: "Whole-wheat toast with avocado and scrambled eggs",
        lunch: "Lentil soup with whole-wheat bread",
        snacks: "Apple slices with almond butter",
        dinner: "Turkey chili with whole-wheat crackers"
      },
      {
        day: "Wednesday",
        breakfast: "Oatmeal with fruit and nuts",
        lunch: "Black bean burger on a whole-wheat bun with sweet potato fries",
        snacks: "Carrot sticks with hummus",
        dinner: "Shrimp scampi with whole-wheat pasta"
      },
      {
        day: "Thursday",
        breakfast: "Greek yogurt parfait with fruit and granola",
        lunch: "Chicken Caesar salad with whole-wheat croutons",
        snacks: "Handful of mixed nuts",
        dinner: "Tofu stir-fry with brown rice and vegetables"
      },
      {
        day: "Friday",
        breakfast: "Scrambled eggs with spinach and whole-wheat toast",
        lunch: "Tuna salad sandwich on whole-wheat bread",
        snacks: "Edamame pods",
        dinner: "Lentil soup with whole-wheat bread"
      },
      {
        day: "Saturday",
        breakfast: "Whole-wheat pancakes with fruit and yogurt",
        lunch: "Chicken salad sandwich on whole-wheat bread",
        snacks: "Trail mix",
        dinner: "Salmon with roasted vegetables and quinoa"
      },
      {
        day: "Sunday",
        breakfast: "Smoothie with protein powder, fruit, and spinach",
        lunch: "Leftovers from the week",
        snacks: "Greek yogurt with berries and granola",
        dinner: "Chicken stir-fry with brown rice and vegetables"
      }
    ],
    'normal': [
      {
        day: "Monday",
        breakfast: "Whole grain toast with avocado and poached eggs",
        lunch: "Quinoa salad with mixed vegetables and grilled chicken",
        snacks: "Greek yogurt with mixed berries",
        dinner: "Grilled fish with sweet potato and steamed broccoli"
      },
      {
        day: "Tuesday",
        breakfast: "Oatmeal with almond milk, sliced banana, and chia seeds",
        lunch: "Brown rice with lentil soup and a side of sautéed spinach",
        snacks: "Hummus with carrot and cucumber sticks",
        dinner: "Vegetable stir-fry with tofu and brown rice"
      },
      {
        day: "Wednesday",
        breakfast: "Smoothie with spinach, banana, almond milk, and protein powder",
        lunch: "Whole wheat wrap with turkey, lettuce, tomato, and mustard",
        snacks: "Handful of mixed nuts (almonds, walnuts, and pistachios)",
        dinner: "Grilled shrimp with quinoa and roasted Brussels sprouts"
      },
      {
        day: "Thursday",
        breakfast: "Greek yogurt parfait with granola and mixed berries",
        lunch: "Chickpea and vegetable curry with brown rice",
        snacks: "Apple slices with peanut butter",
        dinner: "Salmon fillet with sweet potato mash and asparagus"
      },
      {
        day: "Friday",
        breakfast: "Whole grain pancakes with maple syrup and strawberries",
        lunch: "Caprese salad with whole grain baguette",
        snacks: "Cottage cheese with pineapple chunks",
        dinner: "Quinoa bowl with black beans, corn, avocado, and salsa"
      },
      {
        day: "Saturday",
        breakfast: "Muesli with milk, sliced peaches, and a sprinkle of flaxseeds",
        lunch: "Chicken Caesar salad with whole grain croutons",
        snacks: "Vegetable sticks with tzatziki dip",
        dinner: "Vegetarian lasagna with a side of mixed green salad"
      },
      {
        day: "Sunday",
        breakfast: "Egg-white omelet with spinach, tomatoes, and feta cheese",
        lunch: "Quinoa-stuffed bell peppers with a side of Greek salad",
        snacks: "Orange slices with a handful of almonds",
        dinner: "Grilled vegetable kebabs with couscous"
      }
    ]
  };

}

