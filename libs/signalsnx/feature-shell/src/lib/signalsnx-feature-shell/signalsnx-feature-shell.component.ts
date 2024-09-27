import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-signalsnx-feature-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: ` <div class="flex flex-1 items-center justify-center p-6">
    Hola, soy el shell de la aplicación
    <router-outlet />
  </div>`,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsnxFeatureShellComponent {}
