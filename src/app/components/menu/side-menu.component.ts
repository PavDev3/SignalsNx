import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="col-2">Menu</div> `,
})
export class SideMenuComponent {}
