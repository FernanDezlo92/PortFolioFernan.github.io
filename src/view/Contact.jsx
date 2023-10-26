import "../styles/Contact.css";
import { useEffect, useState } from "react";

export default function Contact() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    let contactScroll = false;
    const parallaxAbout = document.querySelectorAll(".contact");

    const scrollInProgress = () => {
      contactScroll = true;
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    const raf = () => {
      if (contactScroll && screenWidth > 1910) {
        parallaxAbout.forEach((element) => {
          element.style.transform =
            "translateY(calc(280% + " + window.scrollY / -25 + "%))";
        });
        contactScroll = false;
      }

      if (contactScroll && screenWidth < 1910) {
        parallaxAbout.forEach((element) => {
          element.style.transform =
            "translateY(calc(240% + " + window.scrollY / -25 + "%))";
        });
        contactScroll = false;
      }
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    window.addEventListener("scroll", scrollInProgress);

    return () => {
      window.removeEventListener("scroll", scrollInProgress);
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);
  return (
    <div className="contactMe">
      <div className="contact">CONTACTO</div>
      <div className="textoContactMe">
        <div className="contacIconosParrafo">
          <a href="https://github.com/FernanDezlo92" target="blank">
            <img
              src="./img/logoContact/brand-github.png"
              className="cardIconContact"
              alt="HTML"
            />
          </a>
          <p>Github</p>
        </div>
        <div className="contacIconosParrafo">
          <a href="https://www.linkedin.com/in/FernandoDezlo" target="blank">
            <img
              src="./img/logoContact/brand-linkedin.png"
              className="cardIconContact"
              alt="HTML"
            />
          </a>
          <p>Linkedin</p>
        </div>
        <div className="contacIconosParrafo">
          <a href="mailto:fernanfernandezag@gmail.com">
            <img
              src="./img/logoContact/mail3.png"
              className="cardIconContactM"
              alt="HTML"
            />
          </a>
          <p>Mail</p>
        </div>
        <div className="contacIconosParrafo">
          <a href="/curriculum/FernandoFA-CV.pdf" download>
            <img
              src="./img/logoContact/cv.png"
              className="cardIconContact"
              alt="HTML"
            />
          </a>
          <p>Currículum</p>
        </div>
      </div>
    </div>
  );
}
