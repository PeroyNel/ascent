import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import { CommonModule } from '@angular/common';
import { CartOverlayService } from '../services/cart-overlay.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, MatBadgeModule, CommonModule, MatSlideToggleModule],
})
export class NavbarComponent {
  @Input() cartItemCount: number = 0;
  @Output() openCart: EventEmitter<void> = new EventEmitter<void>();

  constructor(private cartOverlayService: CartOverlayService, private themeService: ThemeService) {}
  triggerCart() {
    console.log('cart clicked');
    this.cartOverlayService.openOverlay();
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
