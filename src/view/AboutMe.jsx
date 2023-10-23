import { useEffect } from "react";
import "../styles/aboutMe.css";

export default function AboutMe() {
  useEffect(() => {
    let didScroll = false;
    const parallaxAbout = document.querySelectorAll(".about");

    const scrollInProgress = () => {
      didScroll = true;
    };

    const raf = () => {
      if (didScroll) {
        parallaxAbout.forEach((element) => {
          element.style.transform =
            "translateX(calc(-25% + " + window.scrollY / 25 + "%))";
        });
        didScroll = false;
      }
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    window.addEventListener("scroll", scrollInProgress);

    return () => {
      window.removeEventListener("scroll", scrollInProgress);
    };
  }, []);

  return (
    <div className="aboutMe">
      <div className="about about-component-aboutme">ABOUT ME</div>
      <div className="textoAboutMe">
        Estoy especializado tanto en el desarrollo Backend como en el Frontend,
        lo que me permite abordar proyectos de manera integral y ofrecer
        soluciones completas.
      </div>
    </div>
  );
}
