import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  bookedTravels = [];

  addToCart(travel){
    this.bookedTravels.push(travel);
  }

  getTravels(){
    return this.bookedTravels;
  }

  placeOrder(){
    this.bookedTravels = [];
    return this.bookedTravels;
  }

}
