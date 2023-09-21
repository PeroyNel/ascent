import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Service provided at the root level
})
export class CartOverlayService {
  // Subject to trigger and notify the opening of the cart overlay
  private openOverlaySubject = new Subject<void>();

  // Observable to subscribe to the cart overlay opening events
  openOverlay$ = this.openOverlaySubject.asObservable();

  // Function to notify subscribers that the cart overlay should be opened
  openOverlay() {
    this.openOverlaySubject.next(); // Emit an event to indicate the cart overlay should be opened
  }
}
