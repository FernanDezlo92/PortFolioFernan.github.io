import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "../styles/bio.css";
import CustomizedTimeline from "../components/CustomizedTimeline";

export default function Bio() {
  return (
    <ParallaxProvider>
      <div className="bioMe">
        <Parallax translateX={[0, -15]}>
          <div className="bio">BIOGRAFIA</div>
        </Parallax>
        <div className="textoBioMe">
          <CustomizedTimeline />
        </div>
      </div>
    </ParallaxProvider>
  );
}
