import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TravelsComponent } from './travels/travels.component';
import { HeroComponent } from './hero/hero.component';
import { CartComponent } from './cart/cart.component';
import { TraveldetailsComponent } from './traveldetails/traveldetails.component';

const routes: Routes = [{

	path: "", component: HomeComponent
},

{
	path: "navbar", component: NavbarComponent
},

{
	path: "footer", component: FooterComponent
},

{
	path: "travels", component: TravelsComponent
},

{
	path: "hero", component: HeroComponent
},

{
	path: "cart", component: CartComponent
},

{
	path: "travels/:travelId", component: TraveldetailsComponent
}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
