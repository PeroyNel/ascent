import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOverlayComponent } from './product-overlay.component';

describe('ProductOverlayComponent', () => {
  let component: ProductOverlayComponent;
  let fixture: ComponentFixture<ProductOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductOverlayComponent]
    });
    fixture = TestBed.createComponent(ProductOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
