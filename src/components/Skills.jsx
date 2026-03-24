import { info } from "../data/info";

function Skills() {
  return (
    <section id="habilidades" className="skills">
      <div className="seccion-titulo">
        <h2>Habilidades</h2>
        <span className="seccion-linea"></span>
      </div>

      <div className="skills-grid">
        {info.habilidades.map((habilidad) => (
          <div key={habilidad.nombre} className="skill-item">
            {/* Nombre y porcentaje en la misma fila */}
            <div className="skill-header">
              <span className="skill-nombre">{habilidad.nombre}</span>
              <span className="skill-porcentaje">{habilidad.nivel}%</span>
            </div>

            {/* Barra de fondo */}
            <div className="skill-barra-fondo">
              {/* Barra de progreso — su ancho viene del dato nivel */}
              <div
                className="skill-barra-progreso"
                style={{ width: `${habilidad.nivel}%` }}
              ></div>
              {/* Template literal: convierte 90 en "90%" */}
            </div>
          </div>
        ))}
      </div>

      {/* Tecnologías que estoy aprendiendo */}
      <div className="skills-aprendiendo">
        <p>🌱 Actualmente aprendiendo...</p>
        <div className="skills-tags">
          <span className="skill-tag-aprendiendo">React Avanzado</span>
          <span className="skill-tag-aprendiendo">Node.js</span>
          <span className="skill-tag-aprendiendo">Tailwind CSS</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
