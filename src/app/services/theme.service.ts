import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root' // Service provided at the root level
})
export class ThemeService {
  private currentTheme: string = 'light'; // Private variable to store the current theme.

  constructor(private rendererFactory: RendererFactory2) {
    // Injecting the RendererFactory2 service in the constructor.
  }

  // Creating a private instance of Renderer2 using the injected RendererFactory2.
  private renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);

  // Method to toggle the application theme.
  toggleTheme() {
    // Remove the current theme class from the document body.
    this.renderer.removeClass(document.body, `${this.currentTheme}-theme`);
    
    // Toggle between 'light' and 'dark' themes.
    if (this.currentTheme === 'light') {
      this.currentTheme = 'dark';
    } else {
      this.currentTheme = 'light';
    }
    
    // Apply the updated theme class to the document body.
    this.renderer.addClass(document.body, `${this.currentTheme}-theme`);
  }

  // Method to apply a specific theme.
  applyTheme(theme: string) {
    // Remove the current theme class from the document body.
    this.renderer.removeClass(document.body, `${this.currentTheme}-theme`);
    
    // Add the specified theme class to the document body.
    this.renderer.addClass(document.body, `${theme}-theme`);
    
    // Update the current theme.
    this.currentTheme = theme;
  }
}



