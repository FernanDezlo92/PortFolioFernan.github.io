import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer fondoClaro">
      <div className="footerContainer">
        {/* <div className="imagFooter">
          <img src="/img/iconoIMG/desktopcofecode.jpg" alt="logo" />
        </div> */}
        <p className="textoFooter">{"< No te vayas sin decir hola />"}</p>
        <p className="copyright">©2023 FernandoDezlo</p>
      </div>
    </footer>
  );
}
