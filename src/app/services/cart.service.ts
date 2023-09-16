import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemCountSubject = new Subject<number>();

  cartItemCount$ = this.cartItemCountSubject.asObservable();

  updateCartItemCount(count: number) {
    this.cartItemCountSubject.next(count);
  }
}