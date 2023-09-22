import { Component, OnInit } from '@angular/core';
import { MobileService } from 'src/app/services/mobile.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  tags?: Tag[];
  constructor(mobileService: MobileService) {
    this.tags = mobileService.getAllTags();
  }

  ngOnInit(): void {}
}
