import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { authGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TrainerloginComponent } from './trainerlogin/trainerlogin.component';
import { TrainerregisterComponent } from './trainerregister/trainerregister.component';
import { CustomerupdatepasswordComponent } from './customerupdatepassword/customerupdatepassword.component';
import { CustomerotpverificationComponent } from './customerotpverification/customerotpverification.component';
import { SupplementsComponent } from './supplements/supplements.component';
import { GymaccessiorsComponent } from './gymaccessiors/gymaccessiors.component';
import { GymequipmentsComponent } from './gymequipments/gymequipments.component';
import { YogaComponent } from './yoga/yoga.component';
import { CartComponent } from './cart/cart.component';
import { TrainerotpverificationComponent } from './trainerotpverification/trainerotpverification.component';
import { TrainerforgotpasswordComponent } from './trainerforgotpassword/trainerforgotpassword.component';
import { TrainerupdatepasswordComponent } from './trainerupdatepassword/trainerupdatepassword.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { BootrainerComponent } from './bootrainer/bootrainer.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BmicalComponent } from './bmical/bmical.component';
import { DietplanComponent } from './dietplan/dietplan.component';
import { CustomeraddressComponent } from './customeraddress/customeraddress.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path :'', component: HomepageComponent },
  {path :'login', component: LoginComponent },
  {path :'dashboard', component: DashboardComponent},
  {path :'register', component: RegisterComponent },
  {path :'customerotpverification' , component:CustomerotpverificationComponent},
  {path :'customerforgotpassword' , component:ForgotpasswordComponent},
  {path :'customerupdatepassword' , component:CustomerupdatepasswordComponent},
  {path :'trainerotpverification' , component:TrainerotpverificationComponent},
  {path :'trainerforgotpassword' , component:TrainerforgotpasswordComponent},
  {path :'trainerupdatepassword' , component:TrainerupdatepasswordComponent},
  {path :'trainerlogin' , component:TrainerloginComponent},
  {path :'trainerregister' , component:TrainerregisterComponent},
  {path :'adminhome' , component:AdminhomeComponent},
  {path :'booktrainer' , component:BootrainerComponent},
  {path :'aboutus' ,canActivate:[authGuard], component:AboutusComponent},
  {path :'home' , canActivate:[authGuard], component:HomepageComponent},
  {path :'supplements' , canActivate:[authGuard], component:SupplementsComponent},
  {path :'gymaccessiors' , canActivate:[authGuard], component:GymaccessiorsComponent},
  {path :'gymequipment' , canActivate:[authGuard], component:GymequipmentsComponent},
  {path :'yoga' , canActivate:[authGuard], component:YogaComponent},
  {path :'cart' , canActivate:[authGuard], component:CartComponent},
  {path :'customer' ,  canActivate:[authGuard],component:CustomerprofileComponent},
  {path:'bmi', canActivate:[authGuard], component:BmicalComponent},
  {path:'diet',canActivate:[authGuard],component:DietplanComponent},
  {path:'address' , canActivate:[authGuard],component:CustomeraddressComponent},
  { path:'checkout/:total', canActivate:[authGuard], component: CheckoutComponent },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { 

}
