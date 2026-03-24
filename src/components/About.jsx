import { info } from "../data/info";

function About() {
  return (
    <section id="sobre-mi" className="about">
      {/* Título de sección */}
      <div className="seccion-titulo">
        <h2>Sobre mí</h2>
        <span className="seccion-linea"></span>
      </div>

      <div className="about-contenido">
        {/* Tarjeta de imagen / inicial */}
        <div className="about-avatar">
          <span>JC</span>
        </div>

        {/* Texto */}
        <div className="about-texto">
          <p>
            Soy <strong>Juan Camilo Cantoñi</strong>, desarrollador frontend
            colombiano apasionado por construir interfaces web modernas, limpias
            y funcionales.
          </p>
          <p>
            Actualmente estoy estudiando{" "}
            <strong>Análisis y Desarrollo de Software</strong> en el SENA, donde
            combino la teoría con proyectos reales que me permiten crecer
            constantemente.
          </p>
          <p>
            Creo firmemente que uno aprende programando — por eso cada proyecto
            que construyo es una oportunidad de mejorar.
          </p>

          {/* Datos rápidos */}
          <div className="about-datos">
            <div className="about-dato">
              <span className="dato-icono">📍</span>
              <span>Colombia</span>
            </div>
            <div className="about-dato">
              <span className="dato-icono">🎓</span>
              <span>SENA — Análisis y Desarrollo de Software</span>
            </div>
            <div className="about-dato">
              <span className="dato-icono">💼</span>
              <span>Disponible para proyectos freelance</span>
            </div>
            <div className="about-dato">
              <span className="dato-icono">📧</span>
              <span>{info.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
