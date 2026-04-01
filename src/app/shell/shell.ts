import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell {
  navItems = [
    { path: '/perfil', label: 'Sobre mí', icon: '👤' },
    { path: '/experiencia', label: 'Experiencia', icon: '💼' },
    { path: '/habilidades', label: 'Habilidades', icon: '🛠️' },
    { path: '/educacion', label: 'Educación', icon: '🎓' },
    { path: '/proyectos', label: 'Proyectos', icon: '🚀' },
  ];
}
