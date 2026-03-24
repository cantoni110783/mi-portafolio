import { info } from "../data/info";

function Projects() {
  return (
    <section id="proyectos" className="projects">
      <div className="seccion-titulo">
        <h2>Proyectos</h2>
        <span className="seccion-linea"></span>
      </div>

      {/* Recorremos el array de proyectos y por cada uno renderizamos una tarjeta */}
      <div className="projects-grid">
        {info.proyectos.map((proyecto) => (
          <div key={proyecto.id} className="project-card">
            {/* Encabezado de la tarjeta */}
            <div className="project-card-header">
              <span className="project-icono">🚀</span>
              <h3>{proyecto.nombre}</h3>
            </div>

            {/* Descripción */}
            <p className="project-descripcion">{proyecto.descripcion}</p>

            {/* Tecnologías usadas */}
            <div className="project-tecnologias">
              {proyecto.tecnologias.map((tec) => (
                <span key={tec} className="project-tag">
                  {tec}
                </span>
              ))}
            </div>

            {/* Botones de links — solo se muestran si el link existe */}
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
