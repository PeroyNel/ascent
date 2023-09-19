import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockProductService } from '../services/mock-product.service'; // Import your product service

@Component({
  selector: 'app-product-overlay',
  templateUrl: './product-overlay.component.html',
  styleUrls: ['./product-overlay.component.scss']
})
export class ProductOverlayComponent implements OnInit {
  product: any; // Define a variable to store the product data

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { productId: number },
    private productService: MockProductService // Inject your mock product service
  ) {}

  ngOnInit() {
    // Fetch the product based on the productId
    this.product = this.productService.getById(this.data.productId);
  }

  truncateAndTrimText(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
      return text;
    } else {
      const truncatedText = text.slice(0, maxLength);
      // Remove trailing whitespace (if any)
      return truncatedText.trim();
    }
  }
}

