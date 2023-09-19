import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ProductOverlayComponent } from '../../product-overlay/product-overlay.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() productAddedToCart: EventEmitter<number> = new EventEmitter();

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {}

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
    this.productAddedToCart.emit(productId);
  }

  openProductScreen(productId: number) {
    const dialogRef = this.dialog.open(ProductOverlayComponent, {
      data: { productId: productId },
      panelClass: 'transparent-backdrop'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Overlay closed');
    });
  }
}
