import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-signalsnx-feature-counter',
  standalone: true,
  imports: [CommonModule],
  template: `<p>signalsnx-feature-counter works!</p>`,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsnxFeatureCounterComponent {}
