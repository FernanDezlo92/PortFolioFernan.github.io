import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/CardProject.css";
import ModalComponent from "./ModalComponent";
import PropTypes from "prop-types";
import React from "react";

export default function CardProject({
  getImageUrl,
  title,
  description,
  technologies,
  link,
  urlVideo,
  descripcionModal,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card
      sx={{ maxWidth: 345 }}
      variant="outlined"
      className="CardFirstProject"
    >
      <CardMedia
        sx={{ height: 245 }}
        image={getImageUrl}
        title="Frist Project"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontFamily={"Inconsolata, monospace"}
          className="titleCard"
        >
          {title}
        </Typography>
        <Typography variant="body2" color={"#ffffff"}>
          {description}
        </Typography>

        <p className="tituloTech">Tecnologias</p>
        {technologies}
      </CardContent>
      <CardActions>
        <Button
          className="buttonGithub"
          variant="outlined"
          size="small"
          href={link}
          target="_blank"
          style={{
            borderRadius: "20px",
            color: "#F4D06F",
            borderColor: "#F4D06F",
            marginRight: "10px",
          }}
        >
          Github
        </Button>
        <Button
          size="small"
          className="buttonModal"
          variant="outlined"
          onClick={handleOpen}
          style={{
            borderRadius: "20px",
            color: "#F4D06F",
            borderColor: "#F4D06F",
          }}
        >
          Conocer más......
        </Button>
        <ModalComponent
          open={open}
          onClose={handleClose}
          title={title}
          urlVideo={urlVideo}
          descripcionModal={descripcionModal}
        ></ModalComponent>
      </CardActions>
    </Card>
  );
}
CardProject.propTypes = {
  getImageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.node,
  link: PropTypes.string,
  urlVideo: PropTypes.string,
  descripcionModal: PropTypes.string,
};
