import { type Route } from '@angular/router';
import { SignalsnxFeatureShellComponent } from './signalsnx-feature-shell/signalsnx-feature-shell.component';

const children: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@signals-nx/signalsnx-feature-counter').then(
        (m) => m.signalsnxFeatureCounterRoutes
      ),
  },
  {
    path: 'user-info',
    loadChildren: () =>
      import('@signals-nx/signalsnx-feature-user-info').then(
        (m) => m.signalsnxFeatureUserInfoRoutes
      ),
  },
  {
    path: 'properties',
    loadChildren: () =>
      import('@signals-nx/signalsnx-feature-properties').then(
        (m) => m.signalsnxFeaturePropertiesRoutes
      ),
  },
];

export const signalsnxFeatureShellRoutes: Route[] = [
  {
    path: '',
    component: SignalsnxFeatureShellComponent,
    children,
  },
];
