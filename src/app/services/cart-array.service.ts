import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // Service provided at the root level
})
export class CartArrayService {
  // BehaviorSubject to manage and emit changes in the cart items
  private cartItemsSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  
  // Observable to subscribe to cart item changes
  cartItems$: Observable<number[]> = this.cartItemsSubject.asObservable();

  // Private array to store cart items
  private cartItems: number[] = [];
  
  // Function to update the cart items with a new array
  updateCartItems(cartItems: number[]) {
    this.cartItemsSubject.next(cartItems); // Emit the updated cart items to subscribers
  }

  // Function to check if an item with a specific ID is in the cart
  isItemInCart(itemId: number): Observable<boolean> {
    return this.cartItems$.pipe(
      map(items => items.includes(itemId)) // Check if the item ID is included in the cart items
    );
  }
}

