import { useState } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contacto", href: "#contacto" },
];

function Navbar() {
  // Estado para controlar el menú hamburguesa en móvil
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="navbar">
      <a href="#inicio" className="navbar-logo">
        JC <span>Cantoñi</span>
      </a>

      {/* Links en desktop */}
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Botón de menú hamburguesa en móvil */}
      <button
        className="navbar-hamburger"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {/* Cambia el ícono segun el estado */}
        {menuAbierto ? "x" : "☰"}
      </button>

      {/* Menú movil */}
      {menuAbierto && (
        <ul className="navbar-menu-movil">
          {links.map((link) => (
            <li key={link.href}>
              {/* Cierra el menú al hacer clic en un link */}
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
