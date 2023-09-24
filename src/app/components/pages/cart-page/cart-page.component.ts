import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  orderConfirmed = false; // Add a property for order confirmation

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {}
  generateQuantityOptions(): number[] {
    const maxQuantity = 10; // Change this to your desired maximum quantity
    return Array.from({ length: maxQuantity }, (_, i) => i + 1);
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.mobile.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.mobile.id, quantity);
  }

  // Function to confirm the order and proceed to checkout
  confirmOrder() {
    if (this.cart && this.cart.items.length > 0) {
      // Display a confirmation message
      alert('Order is confirmed! Redirecting to Homepage...');

      this.orderConfirmed = true;

      // Clear the cart
      this.cartService.clearCart();

      // Redirect to the home page after a short delay
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1); // Delay for 3 seconds (adjust as needed)
    }
  }
}
