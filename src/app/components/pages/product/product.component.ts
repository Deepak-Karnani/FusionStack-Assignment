import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from 'src/app/services/mobile.service';
import { Mobile } from 'src/app/shared/models/Mobile';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent  implements OnInit{
  mobiles: Mobile[] = [];
  constructor(
    private mobileService: MobileService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        this.mobiles = this.mobileService.getAllMobilesBySearchTerm(
          params['searchTerm']
        );
      else if (params['tag'])
        this.mobiles = this.mobileService.getAllMobilesByTag(params['tag']);
      else this.mobiles = mobileService.getAll();
    });
  }

  ngOnInit(): void {}
}
