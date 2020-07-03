import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  cartTravels;

  constructor(private cartService: CartService) { }

  onBookTravels(){
    this.cartTravels = this.cartService.placeOrder();
  }

  ngOnInit(): void {
    this.cartTravels = this.cartService.getTravels();
  }

}
