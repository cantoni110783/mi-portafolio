import { info } from "../data/info";
import profileImg from "../assets/profile.jpeg";

function Hero() {
  return (
    <section id="inicio" className="hero">
      {/* Contenedor de dos columnas: texto izquierda, foto derecha */}
      <div className="hero-contenido">
        {/* Columna izquierda — texto */}
        <div className="hero-texto">
          <p className="hero-saludo">👋 Hola, soy</p>

          <h1 className="hero-nombre">{info.nombre}</h1>

          <h2 className="hero-titulo">
            {info.titulo} <span>& {info.subtitulo}</span>
          </h2>

          <p className="hero-descripcion">{info.descripcion}</p>

          <div className="hero-botones">
            <a href="#proyectos" className="btn-primario">
              Ver mis proyectos
            </a>
            <a href="#contacto" className="btn-secundario">
              Contáctame
            </a>
          </div>

          <div className="hero-redes">
            <a href={info.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={info.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Columna derecha — foto */}
        <div className="hero-foto-contenedor">
          {/* Anillo decorativo exterior */}
          <div className="hero-foto-anillo">
            <img
              src={profileImg}
              alt="Juan Camilo Cantoñi"
              className="hero-foto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
