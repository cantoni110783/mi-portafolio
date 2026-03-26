import { useState } from "react";
import { info } from "../data/info";

// Extraemos todas las tecnologías únicas de todos los proyectos
// para construir los botones de filtro automáticamente
const todasLasTecnologias = [
  "Todos",
  // Set elimina duplicados — si "CSS" aparece en 3 proyectos, solo lo agrega una vez
  // Array.from convierte el Set de vuelta a un array normal
  ...new Set(info.proyectos.flatMap((p) => p.tecnologias)),
];
// flatMap recorre cada proyecto y aplana todos los arrays de tecnologías en uno solo
// Ejemplo: [["HTML","CSS"], ["React","CSS"]] → ["HTML","CSS","React","CSS"]
// Luego Set elimina los repetidos → ["HTML","CSS","React"]

function Projects() {
  // Estado que guarda qué filtro está activo
  // Arranca en "Todos" para mostrar todos los proyectos al inicio
  const [filtroActivo, setFiltroActivo] = useState("Todos");

  // Calculamos qué proyectos mostrar según el filtro activo
  const proyectosFiltrados =
    filtroActivo === "Todos"
      ? info.proyectos // Si es "Todos" — devolvemos todos sin filtrar
      : info.proyectos.filter((proyecto) =>
          // includes() pregunta: ¿existe el filtroActivo en este array de tecnologías?
          proyecto.tecnologias.includes(filtroActivo),
        );

  return (
    <section id="proyectos" className="projects">
      <div className="seccion-titulo">
        <h2>Proyectos</h2>
        <span className="seccion-linea"></span>
      </div>

      {/* Botones de filtro — uno por cada tecnología única */}
      <div className="projects-filtros">
        {todasLasTecnologias.map((tec) => (
          <button
            key={tec}
            // Si este botón es el filtro activo, le agregamos la clase "activo"
            // para resaltarlo visualmente con CSS
            className={`filtro-btn ${filtroActivo === tec ? "activo" : ""}`}
            onClick={() => setFiltroActivo(tec)}
          >
            {tec}
          </button>
        ))}
      </div>

      {/* Mostramos solo los proyectos filtrados */}
      <div className="projects-grid">
        {proyectosFiltrados.map((proyecto) => (
          <div key={proyecto.id} className="project-card">
            <div className="project-card-header">
              <span className="project-icono">🚀</span>
              <h3>{proyecto.nombre}</h3>
            </div>

            <p className="project-descripcion">{proyecto.descripcion}</p>

            <div className="project-tecnologias">
              {proyecto.tecnologias.map((tec) => (
                <span key={tec} className="project-tag">
                  {tec}
                </span>
              ))}
            </div>

            <div className="project-links">
              {proyecto.link && (
                <a
                  href={proyecto.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primario"
                >
                  Ver proyecto
                </a>
              )}
              {proyecto.github && (
                <a
                  href={proyecto.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secundario"
                >
                  Ver código
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
