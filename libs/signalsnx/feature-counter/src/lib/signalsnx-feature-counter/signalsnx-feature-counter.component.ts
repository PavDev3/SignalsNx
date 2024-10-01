import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lib-signalsnx-feature-counter',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1 class="text-3xl">Counter: {{ counter() }}</h1>
    <hr />
    <h2 class="text-2xl">Square Counter: {{ squareCounter() }}</h2>
    <hr />

    <button class="btn btn-primary m-4" (click)="increaseBy(+1)">+1</button>
    <button class="btn btn-primary m-4" (click)="increaseBy(-1)">-1</button>
    <button class="btn btn-primary m-4" (click)="counter.set(0)">
      Reset
    </button>`,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsnxFeatureCounterComponent {
  counter = signal<number>(10);
  squareCounter = computed(() => this.counter() * this.counter());

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
