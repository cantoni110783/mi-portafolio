// Toda la información personal centralizada en un solo lugar

export const info = {
  // ── DATOS PERSONALES ──────────────────────────────────────
  nombre: "Juan Camilo Cantoñi Ambuila",
  titulo: "Desarrollador Frontend",
  subtitulo: "Desarrollador de Software en Formación",
  descripcion:
    "Apasionado por crear interfaces web modernas y funcionales. Estudiante de Análisis y Desarrollo de Software en el SENA, construyendo mi camino en el mundo del desarrollo.",

  // ── REDES Y CONTACTO ──────────────────────────────────────
  github: "https://github.com/cantoni110783",
  linkedin: "https://www.linkedin.com/in/juan-camilo-canto%C3%B1i-b63648394",
  email: "juancamilocantoni2@gmail.com",

  // ── HABILIDADES ───────────────────────────────────────────
  habilidades: [
    { nombre: "HTML", nivel: 90 },
    { nombre: "CSS", nivel: 85 },
    { nombre: "JavaScript", nivel: 75 },
    { nombre: "React", nivel: 50 },
    { nombre: "Git", nivel: 65 },
    { nombre: "GitHub", nivel: 65 },
  ],

  // ── PROYECTOS ─────────────────────────────────────────────
  proyectos: [
    {
      id: 1,
      nombre: "Restaurante La Tertulia",
      descripcion:
        "Sitio web completo para restaurante con menú, información y reservas.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      link: "https://restaurantelatertulia.org/",
      github: "https://github.com/cantoni110783/restaurante-la-tertulia",
    },
    {
      id: 2,
      nombre: "App de Tareas",
      descripcion:
        "Aplicación de gestión de tareas con React. Permite agregar, completar y eliminar tareas con persistencia en localStorage.",
      tecnologias: ["React", "JavaScript", "CSS"],
      link: "https://mi-lista-tareas-nine.vercel.app/",
      github: "https://github.com/cantoni110783/mi-lista-tareas",
    },
  ],
};
