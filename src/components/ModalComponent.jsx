// import "../styles/ModalComponent.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import "../styles/modalComponent.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#62929E",
  border: "3px solid #E15E4A",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

const ModalComponent = ({
  title,
  open,
  onClose,
  urlVideo,
  descripcionModal,
}) => {
  return (
    <div className="projects__container">
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="BoxModal">
          <div className="containerBoton">
            <div onClick={onClose} className="buttonClose">
              <a className="btn btnClose">X</a>
            </div>
          </div>
          <Typography
            className="modalTitle"
            id="modal-modal-title"
            variant="h5"
            component="h2"
            fontFamily={"Inconsolata, monospace"}
          >
            {title}
          </Typography>
          <video controls width="100%">
            <source src={urlVideo} type="video/mp4" />
          </video>
          <Typography
            className="modalDescription"
            id="modal-modal-description"
            sx={{ mt: 2 }}
            fontFamily={"Inconsolata, monospace"}
          >
            {descripcionModal}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

ModalComponent.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  urlVideo: PropTypes.string.isRequired,
  descripcionModal: PropTypes.node.isRequired,
};

export default ModalComponent;
