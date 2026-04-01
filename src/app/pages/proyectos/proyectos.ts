import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {
  proyectos = [
    {
      nombre: 'Portafolio Personal',
      tipo: 'Personal',
      descripcion:
        'Portafolio web desarrollado con Angular 20 y Fluent Design, desplegado en GitHub Pages.',
      tecnologias: ['Angular 20', 'TypeScript', 'CSS', 'GitHub Pages'],
      color: '#2563eb',
      icono: '🌐',
      link: 'https://necroxmar01-prog.github.io/curriculum-web/',
      repo: 'https://github.com/necroxmar01-prog/curriculum-web',
      estado: 'En desarrollo',
    },
    {
      nombre: 'Sistema de Compilaciones AppCenter',
      tipo: 'Universitario',
      descripcion:
        'Tesis universitaria: implementación de un sistema de compilaciones de 2 aplicaciones móviles en Xamarin Forms integrado con AppCenter de Microsoft.',
      tecnologias: ['Xamarin Forms', 'C#', 'XAML', 'AppCenter', 'Azure'],
      color: '#7c3aed',
      icono: '📱',
      link: null,
      repo: null,
      estado: 'Completado',
    },
    {
      nombre: 'Migración SIM — Coppel',
      tipo: 'Trabajo',
      descripcion:
        'Migración del sistema interno SIM de ColdFusion a Angular 15, incluyendo optimización de procedimientos almacenados y resolución de incidencias.',
      tecnologias: ['Angular', 'ColdFusion', 'SQL', 'PostgreSQL', 'Docker'],
      color: '#059669',
      icono: '⚙️',
      link: null,
      repo: null,
      estado: 'En desarrollo',
    },
    {
      nombre: 'App de Comandas Android',
      tipo: 'Trabajo',
      descripcion:
        'Aplicación móvil de comandas para El Paisa Service Food, desarrollada en Xamarin Forms con despliegues CI/CD mediante Azure DevOps.',
      tecnologias: ['Xamarin Forms', 'C#', 'Azure DevOps', 'SQL', 'Android'],
      color: '#0891b2',
      icono: '🍽️',
      link: null,
      repo: null,
      estado: 'Completado',
    },
    {
      nombre: 'Modelado 3D — UPV',
      tipo: 'Universitario',
      descripcion:
        'Colaboración en proyecto de modelado tridimensional de espacios universitarios para la Universidad Politécnica de Victoria.',
      tecnologias: ['Modelado 3D'],
      color: '#d97706',
      icono: '🗺️',
      link: null,
      repo: null,
      estado: 'Completado',
    },
    {
      nombre: 'Sistema de Merma de Insumos',
      tipo: 'Trabajo',
      descripcion:
        'Desarrollo y mantenimiento de sistema responsivo para control de merma de insumos en cadena de suministros de Coppel. Incluye integración con impresora Bixolon y Google Cloud Platform.',
      tecnologias: [
        'Angular 18',
        'Angular 20',
        'PostgreSQL',
        'SpringBoot',
        'Google Cloud',
        'HTML',
        'CSS',
      ],
      color: '#2563eb',
      icono: '📦',
      link: null,
      repo: null,
      estado: 'En desarrollo',
    },
    {
      nombre: 'Monitor de Pólizas',
      tipo: 'Trabajo',
      descripcion:
        'Migración y desarrollo del sistema legado Monitor de Pólizas de Angular 15 a Angular 20, con funcionalidad de visualización y descarga de pólizas en PDF.',
      tecnologias: ['Angular 15', 'Angular 20', 'PostgreSQL', 'SpringBoot', 'Google Cloud', 'PDF'],
      color: '#059669',
      icono: '📋',
      link: null,
      repo: null,
      estado: 'Actual',
    },
    {
      nombre: 'Initial D — Videojuego en Unity',
      tipo: 'Personal',
      descripcion:
        'Videojuego de carreras desarrollado en Unity, inspirado en el anime Initial D. Proyecto personal de desarrollo de videojuegos con mecánicas de conducción y estética del anime.',
      tecnologias: ['Unity', 'C#', 'Game Design'],
      color: '#dc2626',
      icono: '🚗',
      link: 'https://youtu.be/556Uueu1oKk',
      youtube: 'iWx9_caULP8',
      repo: null,
      estado: 'En desarrollo',
    },
  ];

  filtros = ['Todos', 'Personal', 'Universitario', 'Trabajo'];
  filtroActivo = 'Todos';

  get proyectosFiltrados() {
    if (this.filtroActivo === 'Todos') return this.proyectos;
    return this.proyectos.filter((p) => p.tipo === this.filtroActivo);
  }

  setFiltro(filtro: string) {
    this.filtroActivo = filtro;
  }
}
