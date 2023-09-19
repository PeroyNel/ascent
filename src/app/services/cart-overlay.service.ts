
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartOverlayService {
  private openOverlaySubject = new Subject<void>();

  openOverlay$ = this.openOverlaySubject.asObservable();

  openOverlay() {
    this.openOverlaySubject.next();
  }
}