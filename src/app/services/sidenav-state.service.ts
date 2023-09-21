import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Service provided at the root level
})
export class SidenavStateService {
  private isOpen = new BehaviorSubject<boolean>(false); // Private BehaviorSubject to manage the sidenav state.

  isOpen$ = this.isOpen.asObservable(); // Exposes an Observable to the consumers of this service.

  toggle() {
    console.log('service triggered'); // Log a message when the toggle method is called.
    this.isOpen.next(!this.isOpen.value); // Toggles the value of the isOpen BehaviorSubject.
  }
}
