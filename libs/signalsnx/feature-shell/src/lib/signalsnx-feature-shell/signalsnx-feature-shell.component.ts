import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './../../../../../shared/ui/components/ui-sidemenu/src/menu.component';

@Component({
  selector: 'lib-signalsnx-feature-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent],
  template: `
    <div class="flex flex-col h-screen">
      <div class="items-center justify-center p-6">
        <h1 class="text-3xl font-bold underline text-center">
          Welcome to Singlas
        </h1>
      </div>
      <div class="flex flex-1">
        <ui-side-menu></ui-side-menu>

        <div class="flex-1 p-6">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsnxFeatureShellComponent {}
