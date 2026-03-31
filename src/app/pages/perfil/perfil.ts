import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  puestos = [
    'Web Master',
    'Desarrollador de aplicaciones',
    'Desarrollador web',
    'Desarrollador móvil',
    'Analista de datos',
    'Ingeniero de software',
    'Soporte Informático',
    'Líder Técnico',
  ];

  aptitudes = [
    { icon: '🤝', label: 'Trabajo en equipo' },
    { icon: '🔄', label: 'Flexibilidad / adaptabilidad' },
    { icon: '🧩', label: 'Capacidad para resolver problemas' },
    { icon: '👥', label: 'Colaborativo' },
  ];

  idiomas = [
    { nombre: 'Español', nivel: 'Nativo', porcentaje: 100 },
    { nombre: 'Inglés', nivel: 'Intermedio', porcentaje: 55 },
  ];
}
