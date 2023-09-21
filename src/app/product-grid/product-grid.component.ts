// Import necessary Angular components and services
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MockProductService } from '../services/mock-product.service';
import { CartService } from '../services/cart.service';
import { CartArrayService } from '../services/cart-array.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
})
export class ProductGridComponent implements OnInit {
  // Output property to emit the cart item count to the parent component
  @Output() cartItemCount: EventEmitter<number> = new EventEmitter();

  // Array to store product data
  products: any[] = [];

  // Array to store cart item IDs
  cartItems: number[] = [];

  // Constructor: Injects services required for the component
  constructor(
    private mockProductService: MockProductService,
    private cartService: CartService,
    private cartArrayService: CartArrayService
  ) {}

  // Lifecycle hook: Executed when the component is initialized
  ngOnInit() {
    // Fetch all products from a mock service and initialize the products array
    this.products = this.mockProductService.getAll();
  }

  // Function to add a product to the cart
  addProductToCart(productId: number) {
    // Check if the product is not already in the cart
    if (!this.cartItems.includes(productId)) {
      // Add the product to the cartItems array
      this.cartItems.push(productId);

      // Update the cart items in the cartArrayService
      this.cartArrayService.updateCartItems(this.cartItems);

      // Update the cart item count in the cart service
      this.cartService.updateCartItemCount(this.cartItems.length);

      // Emit the updated cart item count to the parent component
      this.cartItemCount.emit(this.cartItems.length);
    }
  }
}

