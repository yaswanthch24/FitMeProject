import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  loginstatus: any;
  cartItems: any;
  isUserLoggedIn: boolean;
  loginStatus:any;

  constructor(private http:HttpClient) {
    this.cartItems=[];
    this.isUserLoggedIn = false;
    this.loginStatus = new Subject();
  }

  addToCart(product: any) {
    this.cartItems.push(product);
  }

  getCartItems(): any {
    return this.cartItems;
  }

  clearCartItems() {
    this.cartItems = [];
  }

  setCartItems() {
    this.cartItems.splice();
  }

   setIsUserLoggedIn() {
    this.isUserLoggedIn = true;
    this.loginStatus.next(true);
  }

  getIsUserLogged(): boolean {
    return this.isUserLoggedIn;
  }  

  getLoginStatus(): any {
    return this.loginStatus.asObservable();
  }

  setIsUserLoggedOut() {
    this.isUserLoggedIn = false;
    this.loginStatus.next(false);
  }

  getAllCountries(){
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getAllCustomers(){
    return this.http.get('http://localhost:8085/getCustomers');
  }

  countCustomers(): Observable<number> {
    return this.http.get<number>('http://localhost:8085/countCustomers');
  }

  customerLogin(emailId: any, password: any): any {
    return this.http.get('http://localhost:8085/customerLogin/' + emailId + '/' + password).toPromise();
  }

  regsiterCustomer(customer: any): any {
    return this.http.post('http://localhost:8085/addCustomer', customer);
  }

  getEmailId(emailId : any):any{
    return this.http.get('http://localhost:8085/getEmailId/' + emailId).toPromise();
  }

  fetchOtp(otp : any) :any{
    return this.http.get('http://localhost:8085/fetchOtp/' + otp).toPromise();
  }

  updatePassword(password : any , otp : any):any{
    return this.http.put('http://localhost:8085/updatePassword/'+otp, password).toPromise();
  }

  getUserProfile(){
    return this.http.get('http://localhost:8085/register')
  }

  deleteCustomer(empId: any) {
    return this.http.delete('http://localhost:8085/deleteCustomerById/' + empId);
  }
  
  updateCustomer(employee: any) {
    return this.http.put('http://localhost:8085/updateCustomer', employee);
  }

  getAllTrainers(){
    return this.http.get('http://localhost:8085/getTrainers');
  }

  countTrainers(): Observable<number> {
    return this.http.get<number>('http://localhost:8085/countTrainers');
  }

  trainerLogin(emailId : any,password:any): any {
    return this.http.get('http://localhost:8085/trainerLogin/' + emailId + '/' + password).toPromise();
  }

  regsiterTrainer(trainer: any): any {
    return this.http.post('http://localhost:8085/addTrainer', trainer);
  }

  fetchEmailId(emailId : any):any{
    return this.http.get('http://localhost:8085/fetchEmailId/' + emailId).toPromise();
  }

  getOtp(otp : any) : any{
    return this.http.get('http://localhost:8085/getOtp/' + otp).toPromise();
  }
  
  passwordUpdate(password : any , otp : any):any{
    return this.http.put('http://localhost:8085/passwordUpdate/'+otp, password).toPromise();
  }

  getTrainerByPincode(pincode : any):any{
    return this.http.get('http://localhost:8085/getTrainerByPincode/' + pincode);
  }

  deleteTrainer(trainerId: any){
    return this.http.delete('http://localhost:8085/deleteTrainerById/' + trainerId)
  }

  address(trainerDetails:any):any {
    return this.http.post('http://localhost:8085/address' , trainerDetails);
  }
  
}