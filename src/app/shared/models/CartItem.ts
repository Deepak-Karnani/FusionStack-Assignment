import { Mobile } from './Mobile';

export class CartItem {
  constructor(public mobile: Mobile) {}
  quantity: number = 1;
  price: number = this.mobile.price;
}
