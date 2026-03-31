# 🌐 Jose Carlos Mar Rangel — Portfolio Web

> Currículum vitae interactivo y portafolio profesional desarrollado como aplicación web. Diseñado para presentar mi perfil como **Ingeniero en Tecnologías de la Información**, experiencia laboral, habilidades técnicas y proyectos destacados.

---

## 📸 Vista previa

<!-- Agrega aquí un screenshot o GIF de tu portafolio -->

> _Coming soon — deploy en progreso_

---

## 🚀 Descripción del proyecto

Este repositorio contiene el código fuente de mi **sitio web personal**, que funciona como:

- 📄 **Currículum vitae en línea** — información profesional, experiencia y educación
- 🛠️ **Portafolio técnico** — proyectos desarrollados y tecnologías utilizadas
- 📬 **Canal de contacto** — formulario o links directos para conectar

El objetivo es tener un espacio profesional en la web que refleje mis habilidades como desarrollador FullStack y gestor de proyectos TI.

---

## 🧰 Stack tecnológico

| Categoría            | Tecnología                          |
| -------------------- | ----------------------------------- |
| Frontend             | Angular / HTML / CSS / TypeScript   |
| Backend              | (si aplica — Node.js, C#, etc.)     |
| Base de datos        | PostgreSQL / SQL Server             |
| DevOps / Deploy      | Docker, Apache, Azure DevOps, CI/CD |
| Control de versiones | GitHub                              |

---

## 📋 Requisitos previos

Antes de correr el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) `v18+`
- [npm](https://www.npmjs.com/) `v9+` _(incluido con Node.js)_
- [Angular CLI](https://angular.io/cli) `v15+`
  ```bash
  npm install -g @angular/cli
  ```
- [Git](https://git-scm.com/)
- _(Opcional)_ [Docker](https://www.docker.com/) si deseas correr el proyecto en contenedor

---

## ⚙️ Instalación y ejecución local

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Corre el servidor de desarrollo

```bash
ng serve
```

Abre tu navegador en: [http://localhost:4200](http://localhost:4200)

> El proyecto recargará automáticamente al detectar cambios en los archivos fuente.

---

## 🐳 Ejecución con Docker _(opcional)_

```bash
# Construir la imagen
docker build -t portfolio-jcmr .

# Correr el contenedor
docker run -p 8080:80 portfolio-jcmr
```

Accede en: [http://localhost:8080](http://localhost:8080)

## 📁 Estructura del proyecto

```
📦 portfolio-jcmr/
├── 📂 public/                   #Imágenes, iconos, etc
├── 📂 src/
│   ├── 📂 app/
│   │   ├── 📂 components/       # Componentes de la UI
│   │   ├── 📂 pages/            # Vistas principales
│   │   ├── 📂 shell/            # Shell global que engloba las vistas
│   ├── index.html
│   └── styles.css
├── 📄 angular.json
├── 📄 package.json
└── 📄 README.md
```

---

## 👤 Sobre mí

**Jose Carlos Mar Rangel**
Ingeniero en Tecnologías de la Información

- 💼 FullStack Developer — 3 años de experiencia (Coppel SA de CV)
- 📱 Mobile Developer — Xamarin Forms / Android
- 🌐 Web Master — Angular, ColdFusion, WordPress

---

## 📄 Licencia

Este proyecto es de uso personal. El código puede ser revisado con fines educativos, pero no debe ser redistribuido ni usado comercialmente sin autorización.

---
