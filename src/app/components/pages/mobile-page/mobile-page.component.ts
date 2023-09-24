import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { MobileService } from 'src/app/services/mobile.service';
import { Mobile } from 'src/app/shared/models/Mobile';

@Component({
  selector: 'app-mobile-page',
  templateUrl: './mobile-page.component.html',
  styleUrls: ['./mobile-page.component.css'],
})
export class MobilePageComponent implements OnInit {
  mobile: Mobile= new Mobile();
  constructor(
    activatedRoute: ActivatedRoute,
    private mobileService: MobileService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) this.mobile = mobileService.getMobilesById(params['id']);
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.mobile);
    this.router.navigateByUrl('/cart-page');
  }
}
