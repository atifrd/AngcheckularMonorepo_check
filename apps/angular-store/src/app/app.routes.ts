import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  
  {
    path: 'products',
    loadComponent: () =>
      import('@angular-monorepo/products').then((m) => m.ProductCardComponent),
  },

  {
    path: 'inventory',
    loadComponent: () =>
      import('@angular-monorepo/products').then((m) => m.ProductListComponent),
  },
];