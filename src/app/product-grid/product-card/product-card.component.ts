import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductOverlayComponent } from '../../product-overlay/product-overlay.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  // Input property to receive product data from the parent component
  @Input() product: any;

  // Output property to emit an event when a product is added to the cart
  @Output() productAddedToCart: EventEmitter<number> = new EventEmitter();

  // Constructor: Injects services required for the component
  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {}

  // Function to open a snack bar notification when a product is added to the cart
  openSnackBar(message: string) {
    this._snackBar.open(message + ' added to cart.', 'Close', { duration: 3000 });
  }

  // Property to track whether the product image is zoomed in or not
  isZoomed: boolean = false;

  // Function to zoom in on the product image
  zoomIn() {
    this.isZoomed = true;
    console.log('zoomIn');
  }

  // Function to zoom out from the product image
  zoomOut() {
    this.isZoomed = false;
    console.log('zoomOut');
  }

  // Function to emit an event when a product is added to the cart
  addProductToCart(productId: number) {
    this.productAddedToCart.emit(productId);
  }

  // Function to open a product overlay dialog when a product is clicked
  openProductScreen(productId: number) {
    const dialogRef = this.dialog.open(ProductOverlayComponent, {
      data: { productId: productId }, // Passes product ID as data to the dialog
      panelClass: 'transparent-backdrop', // Applies a custom CSS class to the dialog
    });

    // Subscribe to the dialog's closure event
    dialogRef.afterClosed().subscribe(result => {
      console.log('Overlay closed');
    });
  }
}

