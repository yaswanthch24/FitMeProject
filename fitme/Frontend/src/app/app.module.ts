import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './navbar/navbar.component';

import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ToastrModule } from 'ngx-toastr'
import { RouterModule } from '@angular/router';
import { NgxCaptchaModule } from 'ngx-captcha'
import { LogoutComponent } from './logout/logout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TrainerloginComponent } from './trainerlogin/trainerlogin.component';
import { TrainerregisterComponent } from './trainerregister/trainerregister.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerupdatepasswordComponent } from './customerupdatepassword/customerupdatepassword.component';
import { CustomerotpverificationComponent } from './customerotpverification/customerotpverification.component';
import { TrainerforgotpasswordComponent } from './trainerforgotpassword/trainerforgotpassword.component';
import { TrainerupdatepasswordComponent } from './trainerupdatepassword/trainerupdatepassword.component';
import { TrainerotpverificationComponent } from './trainerotpverification/trainerotpverification.component';
import { CartComponent } from './cart/cart.component';
import { GymaccessiorsComponent } from './gymaccessiors/gymaccessiors.component';
import { GymequipmentsComponent } from './gymequipments/gymequipments.component';
import { SupplementsComponent } from './supplements/supplements.component';
import { YogaComponent } from './yoga/yoga.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { BootrainerComponent } from './bootrainer/bootrainer.component';
import { ExperiencePipe } from './experience.pipe';
import { GenderPipe } from './gender.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { BmicalComponent } from './bmical/bmical.component';
import { DietplanComponent } from './dietplan/dietplan.component';
import { CustomeraddressComponent } from './customeraddress/customeraddress.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    NavbarComponent,

    RegisterComponent,
    AboutusComponent,
    LogoutComponent,
    HomepageComponent,
    ForgotpasswordComponent,
    TrainerloginComponent,
    TrainerregisterComponent,
    FooterComponent,
    CustomerupdatepasswordComponent,
    CustomerotpverificationComponent,
    TrainerforgotpasswordComponent,
    TrainerupdatepasswordComponent,
    TrainerotpverificationComponent,
    CartComponent,
    GymaccessiorsComponent,
    GymequipmentsComponent,
    SupplementsComponent,
    YogaComponent,
    AdminhomeComponent,
    BootrainerComponent,
    ExperiencePipe,
    GenderPipe,
    DashboardComponent,
    CustomerprofileComponent,
    BmicalComponent,
    DietplanComponent,
    CustomeraddressComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
