import { Component } from '@angular/core';
import { CartOverlayService } from '../services/cart-overlay.service';
import { CartArrayService } from '../services/cart-array.service';
import { MockProductService } from '../services/mock-product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  isOpen = false;                  // Tracks whether the cart overlay is open
  cartItems: number[] = [];        // Array to store cart item IDs
  products: any[] = [];            // Array to store product data
  matchingProducts: any[] = [];    // Array to store products in the cart
  totalValue: number = 0;         // Total value of products in the cart
  isZoomed: boolean[] = [];        // Tracks whether product images are zoomed

  // Constructor: Injects services required for the component
  constructor(
    private cartService: CartService,
    private cartOverlayService: CartOverlayService,
    private cartArrayService: CartArrayService,
    private mockProductService: MockProductService
  ) {}

  // Lifecycle hook: Executed when the component is initialized
  ngOnInit() {
    // Fetch all products from a mock service
    this.products = this.mockProductService.getAll();

    // Subscribe to changes in cart items and update matching products
    this.cartArrayService.cartItems$.subscribe((cartItems) => {
      this.cartItems = cartItems;
      this.getMatchingProducts();
    });

    // Subscribe to openOverlay$ events to toggle the cart overlay
    this.cartOverlayService.openOverlay$.subscribe(() => {
      this.toggleCart();
    });
  }

  // Helper function to filter products matching the cart items
  getMatchingProducts() {
    this.matchingProducts = [];

    for (const cartItemId of this.cartItems) {
      const matchingProduct = this.products.find((product) => product.id === cartItemId);

      if (matchingProduct) {
        this.matchingProducts.push(matchingProduct);
        console.log(this.matchingProducts);
      }
    }

    // Calculate the total value of products in the cart
    this.calculateTotalValue();
  }

  // Helper function to calculate the total value of products in the cart
  calculateTotalValue() {
    this.totalValue = this.matchingProducts.reduce((total, product) => total + product.currentPrice, 0);
    console.log(this.totalValue);
  }

  // Toggle the cart overlay's visibility
  toggleCart() {
    console.log('cart triggered');
    this.isOpen = !this.isOpen;
  }

  // Zoom in on a product image
  zoomIn(index: number) {
    this.isZoomed[index] = true;
  }

  // Zoom out from a product image
  zoomOut(index: number) {
    this.isZoomed[index] = false;
  }

  // Remove an item from the cart
  removeItem(index: number, event: Event) {
    event.stopPropagation();

    if (index >= 0 && index < this.cartItems.length) {
      // Remove the item from the cartItems array
      this.cartItems.splice(index, 1);

      // Update the cart items in the service
      this.cartArrayService.updateCartItems(this.cartItems);

      // Update the cart item count in the cart service
      this.cartService.updateCartItemCount(this.cartItems.length);
    }
  }
}
