import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
}
@Component({
  selector: 'ui-side-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <h3 class="text-3xl font-bold  text-center">Menu</h3>
    <div class="flex flex-col text-center">
      <ul
        class="list-group"
        [routerLink]="[menuItem]"
        routerLinkActive="active"
      >
        @for (item of menuItem; track $index) {
        <li class="list-group-item">
          {{ item.title }}
        </li>
        }
      </ul>
    </div>
  `,
})
export class SideMenuComponent {
  menuItem: MenuItem[] = [
    { title: 'Contador', route: '/counter' },
    { title: 'Usuario', route: '/user-info' },
    { title: 'Propiedades', route: '/properties' },
  ];
}
