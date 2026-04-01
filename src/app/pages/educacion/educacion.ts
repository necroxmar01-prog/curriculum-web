import { Component } from '@angular/core';

@Component({
  selector: 'app-educacion',
  standalone: true,
  templateUrl: './educacion.html',
  styleUrl: './educacion.css',
})
export class Educacion {
  educacion = [
    {
      institucion: 'Universidad Politécnica de Victoria',
      grado: 'Ingeniería en Tecnologías de la Información',
      periodo: '2018 — 2022',
      descripcion:
        'Formación en desarrollo de software, redes, bases de datos y gestión de proyectos de TI.',
      tesis:
        'Implementación de un sistema de compilaciones de 2 aplicaciones móviles creadas en el framework de Xamarin Forms en conjunto con el servicio de AppCenter de Microsoft a través del lenguaje C# y XAML.',
      color: '#2563eb',
      icono: '🎓',
    },
  ];

  certificados = [
    {
      nombre: 'Cloud Computing',
      emisor: 'Google',
      icono: '☁️',
      color: '#0891b2',
    },
    {
      nombre:
        'Exponente en el 1er Congreso Internacional de Mecatrónica, Control e Inteligencia Artificial',
      emisor: 'Congreso Internacional',
      icono: '🏆',
      color: '#7c3aed',
    },
  ];
}
