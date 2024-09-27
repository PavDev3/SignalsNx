import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1 class="text-3xl font-bold underline text-center">
    Welcome to Singlas
  </h1>`,
})
export class HeaderComponent {}
