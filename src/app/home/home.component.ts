import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { SideMenuComponent } from '../components/menu/side-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet, SideMenuComponent],
  template: `
    <app-header></app-header>
    <div class="row mt-2">
      <div class="col-2">
        <app-side-menu />
      </div>
      <div class="col-10">
        Components will be rendered here
        <router-outlet />
      </div>
    </div>
  `,
})
export class HomeComponent {}
