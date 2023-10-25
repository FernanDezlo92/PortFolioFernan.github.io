import "../styles/aboutMe.css";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "../styles/bio.css";

export default function AboutMe() {
  return (
    <ParallaxProvider>
      <div className="aboutMe">
        <Parallax translateX={[-25, 0]}>
          <div className="about about-component-aboutme">SOBRE MI</div>
        </Parallax>
        <div className="textoAboutMe">
          Estoy especializado tanto en el desarrollo Backend como en el
          Frontend, lo que me permite abordar proyectos de manera integral y
          ofrecer soluciones completas.
        </div>
      </div>
    </ParallaxProvider>
  );
}
