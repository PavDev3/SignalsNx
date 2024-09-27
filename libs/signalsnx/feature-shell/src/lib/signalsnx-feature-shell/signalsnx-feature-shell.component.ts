import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './../../../../../shared/ui/components/ui-sidemenu/src/side-menu.component';

@Component({
  selector: 'lib-signalsnx-feature-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideMenuComponent],
  template: ` <div class="flex flex-1 items-center justify-center p-6">
    <h1 class="text-3xl font-bold underline text-center">Welcome to Singlas</h1>
    <ui-side-menu />
    <router-outlet />
  </div>`,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsnxFeatureShellComponent {}
