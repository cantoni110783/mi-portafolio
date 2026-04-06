import { useState } from "react";
import { info } from "../data/info";
import profileImg from "../assets/profile.jpeg";
import Modal from "./Modal";

function Hero() {
  // Estado que controla si el modal está abierto
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <>
      <section id="inicio" className="hero">
        <div className="hero-contenido">
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

          {/* Foto — al hacer clic abre el modal */}
          <div className="hero-foto-contenedor">
            <div
              className="hero-foto-anillo"
              onClick={() => setModalAbierto(true)}
              // Cambiamos el cursor para indicar que es clickeable
              style={{ cursor: "pointer" }}
              title="Haz clic para saber más sobre mí"
            >
              <img
                src={profileImg}
                alt="Juan Camilo Cantoñi"
                className="hero-foto"
              />
            </div>
            {/* Texto que invita a hacer clic */}
            <p className="hero-foto-hint">👆 Haz clic para conocerme</p>
          </div>
        </div>
      </section>

      {/* El modal vive fuera del section gracias a createPortal */}
      <Modal abierto={modalAbierto} onCerrar={() => setModalAbierto(false)} />
    </>
  );
}

export default Hero;
