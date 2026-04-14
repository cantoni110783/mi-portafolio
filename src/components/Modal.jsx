// createPortal nos permite renderizar el modal
// directamente en el body del HTML — fuera del árbol de componentes
import { useEffect } from "react";
import { createPortal } from "react-dom";
import profileImg from "../assets/profile.jpeg";
import { info } from "../data/info";

function Modal({ abierto, onCerrar }) {
  // abierto — prop que dice si el modal está visible
  // onCerrar — función que viene del padre para cerrarlo

  useEffect(() => {
    if (abierto) {
      // Bloqueamos el scroll del fondo cuando el modal está abierto
      document.body.style.overflow = "hidden";
    } else {
      // Lo restauramos cuando se cierra
      document.body.style.overflow = "unset";
    }

    // Limpieza — restauramos el scroll si el componente se desmonta
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [abierto]); // se ejecuta cada vez que "abierto" cambie

  // Si el modal no está abierto no renderizamos nada
  if (!abierto) return null;

  // createPortal renderiza el modal directamente en el body
  // evitando problemas de z-index con otros elementos
  return createPortal(
    // El overlay es el fondo oscuro que cubre toda la pantalla
    <div className="modal-overlay" onClick={onCerrar}>
      {/* stopPropagation evita que el clic en el contenido
          llegue al overlay y cierre el modal accidentalmente */}
      <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
        {/* Botón cerrar */}
        <button className="modal-cerrar" onClick={onCerrar}>
          ✕
        </button>

        {/* Foto grande */}
        <div className="modal-foto-contenedor">
          <img
            src={profileImg}
            alt="Juan Camilo Cantoñi"
            className="modal-foto"
          />
        </div>

        {/* Información */}
        <div className="modal-info">
          <h2 className="modal-nombre">{info.nombre}</h2>
          <p className="modal-titulo">{info.titulo}</p>

          <p className="modal-descripcion">
            Colombiano, apasionado por el desarrollo web y la tecnología.
            Estudiante del SENA construyendo su camino en el mundo del software,
            un proyecto a la vez. Disponible para proyectos freelance y primer
            empleo en el sector tecnológico.
          </p>

          {/* Redes sociales */}
          <div className="modal-redes">
            <a
              href={info.github}
              target="_blank"
              rel="noreferrer"
              className="modal-red"
            >
              🐙 GitHub
            </a>
            <a
              href={info.linkedin}
              target="_blank"
              rel="noreferrer"
              className="modal-red"
            >
              💼 LinkedIn
            </a>
            <a href={`mailto:${info.email}`} className="modal-red">
              📧 Email
            </a>
          </div>

          {/* Botón descargar CV */}
          <a
            href="/CV_Juan_Camilo_Cantoni.pdf"
            download
            className="modal-cv-btn"
          >
            📄 Descargar CV
          </a>
        </div>
      </div>
    </div>,
    document.body, // ← aquí se monta el modal
  );
}

export default Modal;
