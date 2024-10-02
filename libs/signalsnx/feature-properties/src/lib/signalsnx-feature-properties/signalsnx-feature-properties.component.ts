import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { User } from '@signals-nx/userService';

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
          [value]="user().email"
        />
        <input
          #txtFirstName
          type="text"
          class="form-control mb-2"
          (input)="onFieldUpdate('first_name', txtFirstName.value)"
          [value]="user().first_name"
        />
        <input
          #txtLastName
          type="text"
          class="form-control mb-2"
          (input)="onFieldUpdate('last_name', txtLastName.value)"
          [value]="user().last_name"
        />
      </div>
      <div class="col-6">
        <pre>{{ user() | json }}</pre>
      </div>
    </div> `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsnxFeaturePropertiesComponent {
  public fullName = computed(() => {
    return `${this.user().first_name} ${this.user().last_name}`;
  });
  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });

  onFieldUpdate(field: keyof User, value: string) {
    this.user.update((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'id':
          current.id = Number(value);
      }
      return current;
    });
  }
}
