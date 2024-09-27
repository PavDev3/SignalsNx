import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@signals-nx/signalsnx-feature-shell').then(
        (m) => m.signalsnxFeatureShellRoutes
      ),
  },
];
