import { Component, Input, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import { CommonModule } from '@angular/common';
import { SidenavStateService } from '../services/sidenav-state.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, MatBadgeModule, CommonModule, MatDialogModule],
})
export class NavbarComponent {
  @Input() cartItemCount: number = 0;

  constructor(private sidenavStateService: SidenavStateService, public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  toggleSidenav() {
    console.log('menu clicked');
    this.sidenavStateService.toggle();
  }
}

export class DialogContentExampleDialog {}
