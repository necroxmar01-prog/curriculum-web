import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.css',
})
export class Habilidades {
  categorias = [
    {
      titulo: 'Frontend',
      icono: '🖥️',
      color: '#2c6fff',
      habilidades: [
        { nombre: 'Angular', nivel: 90 },
        { nombre: 'TypeScript', nivel: 85 },
        { nombre: 'HTML / CSS', nivel: 90 },
        { nombre: 'XAML', nivel: 75 },
      ],
    },
    {
      titulo: 'Backend',
      icono: '⚙️',
      color: '#41b2c9',
      habilidades: [
        { nombre: 'Java', nivel: 85 },
        { nombre: 'Spring Boot', nivel: 80 },
        { nombre: 'C#', nivel: 80 },
        { nombre: 'ColdFusion', nivel: 65 },
        { nombre: 'SQL / PostgreSQL', nivel: 80 },
      ],
    },
    {
      titulo: 'Mobile',
      icono: '📱',
      color: '#0891b2',
      habilidades: [
        { nombre: 'Xamarin Forms', nivel: 80 },
        { nombre: 'Android Studio', nivel: 70 },
        { nombre: 'C# Mobile', nivel: 78 },
      ],
    },
    {
      titulo: 'DevOps & Servidores',
      icono: '🚀',
      color: '#059669',
      habilidades: [
        { nombre: 'Docker', nivel: 70 },
        { nombre: 'Linux', nivel: 80 },
        { nombre: 'Apache', nivel: 72 },
        { nombre: 'Azure DevOps', nivel: 75 },
        { nombre: 'CI/CD', nivel: 72 },
      ],
    },
    {
      titulo: 'Herramientas',
      icono: '🛠️',
      color: '#d97706',
      habilidades: [
        { nombre: 'Git / GitHub', nivel: 85 },
        { nombre: 'Visual Studio Code', nivel: 90 },
        { nombre: 'IntelliJ IDEA', nivel: 80 },
        { nombre: 'Postman', nivel: 85 },
        { nombre: 'Scrum', nivel: 80 },
      ],
    },
    {
      titulo: 'Administración',
      icono: '🗄️',
      color: '#d04d4d',
      habilidades: [
        { nombre: 'cPanel / Plesk', nivel: 75 },
        { nombre: 'WinSCP', nivel: 80 },
        { nombre: 'FileZilla FTP', nivel: 80 },
        { nombre: 'WordPress', nivel: 75 },
        { nombre: 'Jira', nivel: 78 },
      ],
    },
  ];
}
