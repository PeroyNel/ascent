import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockProductService } from '../services/mock-product.service'; // Import your product service

@Component({
  selector: 'app-product-overlay',
  templateUrl: './product-overlay.component.html',
  styleUrls: ['./product-overlay.component.scss'],
})
export class ProductOverlayComponent implements OnInit {
  // Property to store product data
  product: any;

  // Constructor: Injects data from the dialog and the product service
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { productId: number }, // Injects the product ID from the dialog
    private productService: MockProductService // Injects the product service
  ) {}

  // Lifecycle hook: Executed when the component is initialized
  ngOnInit() {
    // Fetch product data based on the provided productId
    this.product = this.productService.getById(this.data.productId);
  }

  // Function to truncate and trim text to a specified maxLength
  truncateAndTrimText(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
      return text; // Return the original text if it's shorter than or equal to maxLength
    } else {
      const truncatedText = text.slice(0, maxLength);
      return truncatedText.trim(); // Truncate and trim the text to fit within maxLength
    }
  }
}


