import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lib-signalsnx-feature-properties',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Mutaciones:</h1>
    <hr />
    <div class="row">
      <div class="col-6">
        <input
          #txtEmail
          type="text"
          class="form-control mb-2"
          (input)="onFieldUpdate('email', txtEmail.value)"
        />
        <input
          #txtFirstName
          type="text"
          class="form-control mb-2"
          (input)="onFieldUpdate('first_name', txtFirstName.value)"
        />
        <input
          #txtLastName
          type="text"
          class="form-control mb-2"
          (input)="onFieldUpdate('last_name', txtLastName.value)"
        />
      </div>
      <div class="col-6">
        <pre>{{ 'etiqueta' }}</pre>
      </div>
    </div> `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsnxFeaturePropertiesComponent {
  onFieldUpdate(field: string, value: string) {
    console.log(field, value);
  }
}
