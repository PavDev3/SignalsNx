import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-signalsnx-feature-user-info',
  standalone: true,
  imports: [CommonModule],
  template: `<p>signalsnx-feature-user-info works!</p>`,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsnxFeatureUserInfoComponent {}
