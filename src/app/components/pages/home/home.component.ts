import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from 'src/app/services/mobile.service';
import { Mobile } from 'src/app/shared/models/Mobile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  mobiles: Mobile[] = [];
  constructor(
    private mobileService: MobileService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        this.mobiles = this.mobileService.getAllFoodsBySearchTerm(
          params['searchTerm']
        );
      else if (params['tag'])
        this.mobiles = this.mobileService.getAllFoodsByTag(params['tag']);
      else this.mobiles = mobileService.getAll();
    });
  }

  ngOnInit(): void {}
}
