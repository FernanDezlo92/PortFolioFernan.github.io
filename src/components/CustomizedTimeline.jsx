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
          September 2015
          <br /> November 2021
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
            University of Political and Social Sciences
          </Typography>
          <Typography className="titlelineContent">
            Degree in Sociology.
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
          September 2021
          <br /> Present
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
            Online Self-Education
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
          February 2022
          <br /> Present
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
            Open University of Catalonia
          </Typography>
          <Typography className="titlelineContent">
            Degree in Web Application Development.
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
            And more...
          </Typography>
          <Typography className="titlelineContent">
            Because there&apos;s always more to learn.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
