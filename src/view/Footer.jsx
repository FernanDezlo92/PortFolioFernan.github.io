import "../styles/Footer.css";
import Cup from "../components/cup";

export default function Footer() {
  return (
    <footer className="footer fondoClaro">
      <div className="footerContainer">
        <Cup />
        <p className="textoFooter">{"< Don't leave without saying hello />"}</p>
        <p className="copyright">©2023 FernandoDezlo</p>
      </div>
    </footer>
  );
}
