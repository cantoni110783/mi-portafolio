import { info } from "../data/info";

// Array de métodos de contacto
const contactos = [
  {
    id: 1,
    icono: "📧",
    titulo: "Email",
    valor: info.email,
    link: `mailto:${info.email}`, // mailto: abre el cliente de correo
  },
  {
    id: 2,
    icono: "💼",
    titulo: "LinkedIn",
    valor: "Juan Camilo Cantoñi",
    link: info.linkedin,
  },
  {
    id: 3,
    icono: "🐙",
    titulo: "GitHub",
    valor: "cantoni110783",
    link: info.github,
  },
];

function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="seccion-titulo">
        <h2>Contacto</h2>
        <span className="seccion-linea"></span>
      </div>

      {/* Mensaje de invitación */}
      <p className="contact-mensaje">
        ¿Tienes un proyecto en mente o quieres que trabajemos juntos? No dudes
        en escribirme. 🚀
      </p>

      {/* Tarjetas de contacto */}
      <div className="contact-grid">
        {contactos.map((contacto) => (
          <a
            key={contacto.id}
            href={contacto.link}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icono">{contacto.icono}</span>
            <div>
              <p className="contact-titulo">{contacto.titulo}</p>
              <p className="contact-valor">{contacto.valor}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
