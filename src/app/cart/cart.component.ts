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
  isOpen = false;
  cartItems: number[] = [];
  products: any[] = [];
  matchingProducts: any[] = [];
  totalValue: number = 0;
  isZoomed: boolean[] = [];

  constructor(private cartService: CartService, private cartOverlayService: CartOverlayService, private cartArrayService: CartArrayService, private mockProductService: MockProductService) {}

  ngOnInit() {
    this.products = this.mockProductService.getAll();
    this.cartArrayService.cartItems$.subscribe((cartItems) => {
      this.cartItems = cartItems;
      this.getMatchingProducts();
    });
    this.cartOverlayService.openOverlay$.subscribe(() => {
      this.toggleCart();
    });
  }

  getMatchingProducts() {
    this.matchingProducts = [];

    for (const cartItemId of this.cartItems) {
      const matchingProduct = this.products.find((product) => product.id === cartItemId);

      if (matchingProduct) {
        this.matchingProducts.push(matchingProduct);
        console.log(this.matchingProducts);
      }
    }
    this.calculateTotalValue();
  }

  calculateTotalValue() {
    this.totalValue = this.matchingProducts.reduce((total, product) => total + product.currentPrice, 0);
    console.log(this.totalValue);
  }

  toggleCart() {
    console.log('card triggered');
    this.isOpen = !this.isOpen;
  }

  zoomIn(index: number) {
      this.isZoomed[index] = true;
  }

  zoomOut(index: number) {
      this.isZoomed[index] = false;
  }

  removeItem(index: number, event: Event) {
    event.stopPropagation();
    if (index >= 0 && index < this.cartItems.length) {
      // Remove the item from the array using splice
      this.cartItems.splice(index, 1);
      
      // Update the cartItems in your service
      this.cartArrayService.updateCartItems(this.cartItems);
      
      // Update the cart count
      this.cartService.updateCartItemCount(this.cartItems.length);
    }
  }
  
}
