import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Service provided at the root level
})
export class CartService {
  // Subject to manage and notify changes in the cart item count
  private cartItemCountSubject = new Subject<number>();

  // Observable to subscribe to cart item count changes
  cartItemCount$ = this.cartItemCountSubject.asObservable();

  // Function to update and notify the cart item count
  updateCartItemCount(count: number) {
    this.cartItemCountSubject.next(count); // Emit the updated cart item count to subscribers
  }
}
