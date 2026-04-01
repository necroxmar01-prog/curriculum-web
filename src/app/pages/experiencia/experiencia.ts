import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css',
})
export class Experiencia {
  trabajos = [
    {
      empresa: 'Coppel SA de CV',
      puesto: 'Programador FullStack',
      periodo: 'Junio 2023 — Marzo 2026',
      activo: true,
      descripcion:
        'Migración del sistema SIM de ColdFusion a Angular, creación de vistas y optimización de procedimientos almacenados.',
      actividades: [
        'Migración de sistema SIM de ColdFusion a Angular 15',
        'Creación de vistas en ColdFusion',
        'Optimización de procedimientos almacenados',
        'Resolución de incidencias',
      ],
      herramientas: [
        'Angular',
        'ColdFusion',
        'Postman',
        'IntelliJ IDEA',
        'WinSCP',
        'Apache',
        'Docker',
        'Linux',
        'SQLServer',
        'PostgreSQL',
        'Springboot',
      ],
      color: '#2563eb',
    },
    {
      empresa: 'El Paisa Service Food',
      puesto: 'Programador FullStack Móvil',
      periodo: 'Enero 2022 — Enero 2023',
      activo: false,
      descripcion:
        'Desarrollo de aplicación de comandas para plataforma Android usando Xamarin Forms y despliegues CI/CD con Azure DevOps.',
      actividades: [
        'Despliegues de versiones CI/CD',
        'Creación de vistas en XAML',
        'Consumo de servicios con C#',
        'Creación de base de datos',
        'Creación de componentes',
        'Aplicación de comandas en plataforma Android',
      ],
      herramientas: [
        'Xamarin',
        'Xamarin Forms',
        'C#',
        'XAML',
        'Azure DevOps',
        'SQL',
        'PostgreSQL',
        'phpMyAdmin',
        'Apache',
        'Visual Studio 2017',
      ],
      color: '#7c3aed',
    },
    {
      empresa: 'Sundariwater',
      puesto: 'Web Master',
      periodo: 'Durante formación universitaria',
      activo: false,
      descripcion: 'Administración y mantenimiento del sitio web corporativo.',
      actividades: ['Administración del sitio web', 'Mantenimiento de contenido'],
      herramientas: ['WordPress', 'cPanel', 'FileZilla'],
      color: '#0891b2',
    },
    {
      empresa: 'Universidad Politécnica de Victoria',
      puesto: 'Colaborador — Modelado en mapas 3D',
      periodo: 'Durante formación universitaria',
      activo: false,
      descripcion: 'Colaboración en proyecto de modelado tridimensional para la universidad.',
      actividades: [
        'Modelado 3D de espacios universitarios',
        'Colaboración en proyecto de mapas digitales',
        'Uso de librerias OpenGl',
      ],
      herramientas: ['Modelado 3D'],
      color: '#059669',
    },
    {
      empresa: 'Universidad Politécnica de Victoria',
      puesto: 'Programador de Aplicaciones android para Gestión de Escuelas',
      periodo: 'Durante formación universitaria',
      activo: false,
      descripcion: 'Colaboración en proyecto de aplicativo escolar',
      actividades: [
        'Diseño de arquitectura de aplicativo donde se ponía en claro la infraestructura que se iba a usar',
        'Uso de Firebase como base de datos en la nube',
        'Gestion de base de datos no relacionales, nosql',
        'Programación de aplicativo en lenguaje de Kotlin',
      ],
      herramientas: ['Android Studio', 'Firebase'],
      color: '#059669',
    },
  ];
}
