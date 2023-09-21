import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: string = 'light';

  constructor(private rendererFactory: RendererFactory2) {}

  private renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);

  toggleTheme() {
    console.log('toggle-theme', );
    // Remove the old theme class
  this.renderer.removeClass(document.body, `${this.currentTheme}-theme`);
  
  // Toggle between light and dark themes
  if (this.currentTheme === 'light') {
    this.currentTheme = 'dark';
  } else {
    this.currentTheme = 'light';
  }
  
  // Apply the new theme class
  this.renderer.addClass(document.body, `${this.currentTheme}-theme`);
  }

  applyTheme(theme: string) {
    console.log('apply-theme');
    // Remove the previously applied theme class
    this.renderer.removeClass(document.body, `${this.currentTheme}-theme`);
    // Add the new theme class
    this.renderer.addClass(document.body, `${theme}-theme`);
    this.currentTheme = theme;
  }
}


