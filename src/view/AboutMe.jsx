import "../styles/aboutMe.css";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "../styles/bio.css";

export default function AboutMe() {
  return (
    <ParallaxProvider>
      <div className="aboutMe">
        <Parallax translateX={[-25, 0]}>
          <div className="about about-component-aboutme">ABOUT ME</div>
        </Parallax>
        <div className="textoAboutMe">
          I specialize in both Backend and Frontend development, allowing me to
          approach projects comprehensively and provide complete solutions.
        </div>
      </div>
    </ParallaxProvider>
  );
}
