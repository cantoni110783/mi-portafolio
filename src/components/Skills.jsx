import { useState } from "react";
import { info } from "../data/info";

// Datos extra para cada habilidad — descripción y emoji
const extrasHabilidades = {
  HTML5: {
    emoji: "🌐",
    descripcion: "Estructura semantica, formularios y accesibilidad web.",
  },
  CSS: {
    emoji: "🎨",
    descripcion: "Diseño responsivo, Flexbox, Grid y animaciones.",
  },
  JavaScript: {
    emoji: "⚡",
    descripcion: "Logica, manipulacion del DOM y programacion asincrona.",
  },
  React: {
    emoji: "⚛️",
    descripcion: "Componentes, props, useState, useEffect y hooks.",
  },
  Git: {
    emoji: "🌿",
    descripcion: "Control de versiones, ramas y flujo de trabajo.",
  },
  GitHub: {
    emoji: "🐙",
    descripcion: "Repositorios remotos, colaboracion y despliegue.",
  },
};

// Funcion que convierte el nivel numerico en texto descriptivo
const nivelTexto = (nivel) => {
  if (nivel >= 80) return "Avanzado";
  if (nivel >= 60) return "Intermedio";
  return "En desarrollo";
};

function Skills() {
  // Un solo estado guarda el ÍNDICE de la tarjeta volteada
  // null = ninguna tarjeta está volteada
  const [volteada, setVolteada] = useState(null);

  // Función que maneja el clic en cada tarjeta
  const manejarClic = (indice) => {
    // Si la tarjeta clicada ya está volteada → la cerramos (null)
    // Si es una tarjeta diferente → la abrimos guardando su índice
    setVolteada(volteada === indice ? null : indice);
  };

  return (
    <section id="habilidades" className="skills">
      <div className="seccion-titulo">
        <h2>Habilidades</h2>
        <span className="seccion-linea"></span>
      </div>

      <p className="skills-instruccion">
        Haz clic en cada tarjeta para ver mi nivel 👆
      </p>

      {/* Grid de tarjetas */}
      <div className="skills-cards-grid">
        {info.habilidades.map((habilidad, indice) => {
          // Obtenemos los datos extra de esta habilidad
          const extra = extrasHabilidades[habilidad.nombre] || {
            emoji: "💻",
            descripcion: "",
          };

          // Calculamos si ESTA tarjeta específica está volteada
          // comparando su índice con el estado
          const estaVolteada = volteada === indice;

          return (
            <div
              key={habilidad.nombre}
              className="skill-card-contenedor"
              onClick={() => manejarClic(indice)}
            >
              {/* Este div es el que rota — tiene las dos caras adentro */}
              {/* La clase "volteada" se agrega solo cuando estaVolteada es true */}
              <div
                className={`skill-card-inner ${estaVolteada ? "volteada" : ""}`}
              >
                {/* CARA DELANTERA */}
                <div className="skill-card-frente">
                  <span className="skill-card-emoji">{extra.emoji}</span>
                  <h3 className="skill-card-nombre">{habilidad.nombre}</h3>
                  <p className="skill-card-hint">clic para ver nivel</p>
                </div>

                {/* CARA TRASERA */}
                <div className="skill-card-reverso">
                  <span className="skill-card-nivel-num">
                    {habilidad.nivel}%
                  </span>
                  <span className="skill-card-nivel-texto">
                    {nivelTexto(habilidad.nivel)}
                  </span>
                  {/* Barra de progreso en el reverso */}
                  <div className="skill-card-barra-fondo">
                    <div
                      className="skill-card-barra-progreso"
                      style={{ width: `${habilidad.nivel}%` }}
                    ></div>
                  </div>
                  <p className="skill-card-descripcion">{extra.descripcion}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sección de tecnologías en aprendizaje */}
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
