import { Component, HostBinding } from '@angular/core';
import { CartService } from './services/cart.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // private isDark = true;
  cartItemCount: number = 0;

  

  constructor(private cartService: CartService, private themeService: ThemeService) {
    this.cartService.cartItemCount$.subscribe((count) => {
      this.cartItemCount = count;
    });
    this.themeService.applyTheme('light');
  }
}
