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
import "../styles/CustomizedTimeline.css";

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate" className="Timeline">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          className="timelineOppositeContent"
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
          <Typography variant="h6" component="span" className="timelineContent">
            Universidad de Ciencias Políticas y Sociología
          </Typography>
          <Typography className="titlelineContent">
            Grado en Sociología.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          className="timelineOppositeContent"
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
          <Typography variant="h6" component="span" className="timelineContent">
            Formación Online Autoformación
          </Typography>
          <Typography className="titlelineContent">
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
          className="timelineOppositeContent"
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
          <Typography variant="h6" component="span" className="timelineContent">
            Universidad Abierta de Cataluña
          </Typography>
          <Typography className="titlelineContent">
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
          <Typography variant="h6" component="span" className="timelineContent">
            Y más...
          </Typography>
          <Typography className="titlelineContent">
            Porqué siempre hay que estar aprendiendo
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
