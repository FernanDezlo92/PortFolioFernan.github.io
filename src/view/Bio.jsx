import { useEffect, useState } from "react";
import "../styles/bio.css";
import CustomizedTimeline from "../components/CustomizedTimeline";

export default function Bio() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    let didScrollBio = false;
    const parallaxBio = document.querySelectorAll(".bio");

    const scrollInProgressBio = () => {
      didScrollBio = true;
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    const raf = () => {
      if (didScrollBio && screenWidth < 1910) {
        parallaxBio.forEach((element) => {
          element.style.transform =
            "translateX(calc(310% - " + window.scrollY / 25 + "%))";
        });
        didScrollBio = false;
      }

      if (didScrollBio && screenWidth > 1910) {
        parallaxBio.forEach((element) => {
          element.style.transform =
            "translateX(calc(390% - " + window.scrollY / 25 + "%))";
        });
        didScrollBio = false;
      }
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    window.addEventListener("scroll", scrollInProgressBio);

    return () => {
      window.removeEventListener("scroll", scrollInProgressBio);
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <div className="bioMe">
      <div className="bio" id="bio">
        BIOGRAFIA
      </div>
      <div className="textoBioMe">
        <CustomizedTimeline />
      </div>
    </div>
  );
}
