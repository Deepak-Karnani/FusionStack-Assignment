
import { Injectable } from '@angular/core';
import { sample_mobile, sample_tags } from 'src/data';
import { Mobile } from '../shared/models/Mobile';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class MobileService{
  constructor() {}

  getAll(): Mobile[] {
    return sample_mobile;
  }

  getAllMobilesBySearchTerm(searchTerm: string) {
    return this.getAll().filter((mobile) =>
      mobile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllMobilesByTag(tag: string): Mobile[] {
    return tag === 'All'
      ? this.getAll()
      : this.getAll().filter((mobile) => mobile.tags?.includes(tag));
  }

  getMobilesById(mobileId: string): Mobile {
    return this.getAll().find((mobile) => mobile.id == mobileId) ?? new Mobile();
  }
}
