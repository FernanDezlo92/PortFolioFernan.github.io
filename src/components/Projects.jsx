import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "../styles/projects.css";
import ModalComponent from "./ModalComponent";
import React from "react";

export default function Projects(props) {
  const {
    numero,
    titulo,
    descripcion,
    skills,
    links,
    img,
    invertido,
    descripcionModal,
    urlVideo,
  } = props;
  const leftColumnRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = leftColumnRef.current.offsetTop;

      // Determina si el usuario ha alcanzado la parte superior de la página
      if (scrollTop >= offsetTop && !isSticky) {
        setIsSticky(true);
      } else if (scrollTop < offsetTop && isSticky) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  const handleLink = (e) => {
    e.preventDefault();
    window.open(links, "_blank");
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="projects" id="projects">
      <div className={`columnasProjectos ${invertido ? "invertido" : ""}`}>
        <div
          className={`leftColumn ${isSticky ? "sticky" : ""}`}
          ref={leftColumnRef}
        >
          <div className="descripcionProjecto">
            <h6 className="numeroProject">{numero}</h6>
            <h2 className="tituloProject">{titulo}</h2>
            <p className="descripcionProject">{descripcion}</p>
          </div>
          <div className="skillsProjecto">
            <h4>Tecnologías:</h4>
            {skills}
          </div>
          <div className="linksProjecto">
            <h4>Te gustaría saber más...</h4>
            <div className="containerBotonProjectos">
              <button onClick={handleLink} className="boton link">
                <span>GitHub</span>
                <svg>
                  <rect x="0" y="0" fill="none"></rect>
                </svg>
              </button>
              <button onClick={handleOpen} className="boton link">
                <span>Video</span>
                <svg>
                  <rect x="0" y="0" fill="none"></rect>
                </svg>
              </button>
            </div>
          </div>
          <ModalComponent
            open={open}
            onClose={handleClose}
            title={titulo}
            urlVideo={urlVideo}
            descripcionModal={descripcionModal}
          />
        </div>
        <div className="rightColumn">
          <div className="imagenesProjectos">{img}</div>
        </div>
      </div>
    </section>
  );
}

// Define las validaciones de tipo para las propiedades
Projects.propTypes = {
  numero: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  skills: PropTypes.node.isRequired,
  links: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired,
  descripcionModal: PropTypes.string,
  urlVideo: PropTypes.string,
  invertido: PropTypes.bool, // Nueva propiedad para controlar la inversión
};
