import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { travels } from '../travels';
import { CartService } from '../cart.service';

@Component({
  selector: 'traveldetails',
  templateUrl: './traveldetails.component.html',
  styleUrls: ['./traveldetails.component.sass']
})
export class TraveldetailsComponent implements OnInit {
  travel;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  onBookNow(travel){
    this.cartService.addToCart(travel);
    alert(travel.name + " was added to your Cart!")
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      this.travel = travels[+params.get('travelId')];
    });
  }
}
