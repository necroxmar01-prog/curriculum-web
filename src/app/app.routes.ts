import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'perfil', pathMatch: 'full' },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil').then((m) => m.Perfil),
  },
  {
    path: 'experiencia',
    loadComponent: () => import('./pages/experiencia/experiencia').then((m) => m.Experiencia),
  },
];
