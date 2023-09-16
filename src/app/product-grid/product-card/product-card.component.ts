import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() productAddedToCart: EventEmitter<number> = new EventEmitter();

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this._snackBar.open(message + ' added to cart.', 'Close', {duration: 3000});
  }
  isZoomed: boolean = false;

  zoomIn() {
    this.isZoomed = true;
    console.log('zoomIn');
  }

  zoomOut() {
    this.isZoomed = false;
    console.log('zoomOut');
  }

  addProductToCart(productId: number) {
    // ... Your logic to add the product to the cart ...

    // Emit the custom event with the product ID
    this.productAddedToCart.emit(productId);
  }
}
