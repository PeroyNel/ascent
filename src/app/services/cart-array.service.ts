import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartArrayService {
  private cartItemsSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  cartItems$: Observable<number[]> = this.cartItemsSubject.asObservable();
  private cartItems: number[] = [];
  
  updateCartItems(cartItems: number[]) {
    this.cartItemsSubject.next(cartItems);
  }

  isItemInCart(itemId: number): Observable<boolean> {
    return this.cartItems$.pipe(
      map(items => items.includes(itemId))
    );
  }
}
