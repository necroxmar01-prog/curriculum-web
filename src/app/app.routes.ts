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
  {
    path: 'habilidades',
    loadComponent: () => import('./pages/habilidades/habilidades').then((m) => m.Habilidades),
  },
  {
    path: 'educacion',
    loadComponent: () => import('./pages/educacion/educacion').then((m) => m.Educacion),
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/proyectos/proyectos').then((m) => m.Proyectos),
  },
];
