// user-avatar.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
  standalone: true
})
export class UserAvatarComponent {
  @Input() user: { id: number, name: string, imageUrl: string } | undefined;
}

