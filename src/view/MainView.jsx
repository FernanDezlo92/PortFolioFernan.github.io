import "../styles/mainView.css";
import SouthIcon from "@mui/icons-material/South";

export default function MainView() {
  return (
    <div className="mainview">
      <div className="nombre">Fernando Fernández Aguiló</div>
      <div className="titulo">Desarrollador Web</div>
      <SouthIcon
        className="arrow"
        style={{ fontSize: "3rem", fontWeight: "bold" }}
      />
    </div>
  );
}
