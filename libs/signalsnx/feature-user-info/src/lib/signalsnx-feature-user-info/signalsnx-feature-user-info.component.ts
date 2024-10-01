import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lib-signalsnx-feature-user-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Información del Usuario</h1>
    <hr />
    <div class="row">
      <div class="col-4">
        <h3>Usuario Actual:</h3>
        <button class="btn btn-primary m-2">Anterior</button>
        <button class="btn btn-primary m-2">Siguiente</button>
      </div>
      <div class="col-8">
        <h3>Usuario:</h3>
        <p>Nombre:</p>
        <p>Correo:</p>

        <img src="..." alt="avatar" />
      </div>
      <div class="col-8 text-danger">
        <h3>Usuario no encontrado</h3>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsnxFeatureUserInfoComponent {}
