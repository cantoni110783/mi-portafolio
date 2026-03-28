import { useState } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contacto", href: "#contacto" },
];

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Estado del tema — arranca en oscuro
  const [temaClaro, setTemaClaro] = useState(false);

  const cambiarTema = () => {
    const nuevoTema = !temaClaro;

    // Actualizamos el estado
    setTemaClaro(nuevoTema);

    // Agregamos o quitamos el atributo en el elemento raíz del HTML
    // Esto activa las variables CSS del modo claro automáticamente
    document.documentElement.setAttribute(
      "data-tema",
      nuevoTema ? "claro" : "oscuro",
    );
  };

  return (
    <nav className="navbar">
      <a href="#inicio" className="navbar-logo">
        JC<span>Cantoñi</span>
      </a>

      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="navbar-acciones">
        {/* Botón de tema — muestra sol o luna según el estado */}
        <button className="tema-btn" onClick={cambiarTema}>
          {temaClaro ? "🌙" : "☀️"}
        </button>

        {/* Botón hamburguesa para móvil */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? "✕" : "☰"}
        </button>
      </div>

      {menuAbierto && (
        <ul className="navbar-menu-movil">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuAbierto(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
