import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          style={{ fontFamily: "Inconsolata, monospace", fontSize: "1.2rem" }}
        >
          Septiembre 2015
          <br /> Noviembre 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "35px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ fontFamily: "Inconsolata, monospace" }}
          >
            Universidad de Ciencias Políticas y Sociología
          </Typography>
          <Typography style={{ fontFamily: "Inconsolata, monospace" }}>
            Grado en Sociología.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          style={{ fontFamily: "Inconsolata, monospace", fontSize: "1.2rem" }}
        >
          Septiembre 2021
          <br /> Actualidad
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "35px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ fontFamily: "Inconsolata, monospace" }}
          >
            Formación Online Autoformación
          </Typography>
          <Typography style={{ fontFamily: "Inconsolata, monospace" }}>
            Oracle Academy, Mastermind, Udemy...
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          style={{ fontFamily: "Inconsolata, monospace", fontSize: "1.2rem" }}
        >
          Febrero 2022
          <br /> Actualidad
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "35px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ fontFamily: "Inconsolata, monospace" }}
          >
            Universidad Abierta de Cataluña
          </Typography>
          <Typography style={{ fontFamily: "Inconsolata, monospace" }}>
            Grado superior de Desarrollo de Aplicaciones Web.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "#388e3c" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "35px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ fontFamily: "Inconsolata, monospace" }}
          >
            Y más...
          </Typography>
          <Typography style={{ fontFamily: "Inconsolata, monospace" }}>
            Para ser un buen Programador, siempre hay que estar aprendiendo
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
