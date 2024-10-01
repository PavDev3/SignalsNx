import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { User, UserServiceApi } from '@signals-nx/userService';

@Component({
  selector: 'lib-signalsnx-feature-user-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Información del Usuario</h1>
    <hr />
    <div class="row">
      <div class="col-4">
        <h3>Usuario Actual: {{ userId() }}</h3>
        <button class="btn btn-primary m-2" (click)="loadUser(userId() - 1)">
          Anterior
        </button>
        <button class="btn btn-primary m-2" (click)="loadUser(userId() + 1)">
          Siguiente
        </button>
      </div>
      <div class="col-8">
        @if (currentUser()) {
        <h3>Usuario</h3>
        <p>Nombre: {{ currentUser()!.first_name }}</p>
        <p>Correo: {{ currentUser()!.email }}</p>
        <img [src]="currentUser()!.avatar" alt="avatar" class="rounded" />
        } @else {
        <h3>Usuario no encontrado</h3>
        }
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsnxFeatureUserInfoComponent implements OnInit {
  ngOnInit(): void {
    this.loadUser(this.userId());
  }
  readonly userService = inject(UserServiceApi);
  public userId = signal(1);

  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);

  loadUser(id: number) {
    if (id <= 0) return; // No se puede cargar un usuario con id <= 0
    this.userId.set(id);

    this.userService.getUsersById(id).subscribe((user) => {
      this.currentUser.set(user);
      this.userWasFound.set(true);
    });
  }
}
