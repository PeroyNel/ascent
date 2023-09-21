import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule } from '@angular/common';
import { CartOverlayService } from '../services/cart-overlay.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatBadgeModule,
    CommonModule,
    MatSlideToggleModule,
  ],
})
export class NavbarComponent {
  // Input property to receive the cart item count from the parent component
  @Input() cartItemCount: number = 0;

  // Output property to emit an event when the cart is opened
  @Output() openCart: EventEmitter<void> = new EventEmitter<void>();

  // Constructor: Injects services required for the component
  constructor(private cartOverlayService: CartOverlayService, private themeService: ThemeService) {}

  // Function to trigger the opening of the cart overlay
  triggerCart() {
    console.log('cart clicked');
    this.cartOverlayService.openOverlay(); // Invokes the cartOverlayService to open the cart overlay
  }

  // Function to toggle the theme
  toggleTheme() {
    this.themeService.toggleTheme(); // Invokes the themeService to toggle the application's theme
  }
}

