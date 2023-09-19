import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MockProductService } from '../services/mock-product.service';
import { CartService } from '../services/cart.service';
import { CartArrayService } from '../services/cart-array.service';
@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})

export class ProductGridComponent implements OnInit {
  @Output() cartItemCount: EventEmitter<number> = new EventEmitter();
  products: any[] = [];
  cartItems: number[] = [];
  constructor(private mockProductService: MockProductService, private cartService: CartService, private cartArrayService: CartArrayService) {}

  ngOnInit() {
    this.products = this.mockProductService.getAll();
  }

  addProductToCart(productId: number) {
    if (!this.cartItems.includes(productId)) {
      this.cartItems.push(productId);
      this.cartArrayService.updateCartItems(this.cartItems);
      this.cartService.updateCartItemCount(this.cartItems.length);
    }
  }
}
