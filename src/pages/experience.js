import React from "react";
import { Container, Typography, Box, ListItem } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import ReactMarkdown from "react-markdown";

const experienceData = [
  {
    date: "04/2024 – Present",
    title: "Software Developer Engineer",
    company: "WorksNet Tech Innovation Ltd",
    employmentType: "Full-time",
    description: [
      "Contributed to the development of scalable software solutions, improving code efficiency and maintainability.",
      "Led feature integrations for two new products, enhancing user experience and system performance.",
      "Collaborated with cross-functional teams to address product requirements and debug complex issues.",
    ],
  },
  {
    date: "01/2022 – 02/2022",
    title: "Data Structure And Algorithms",
    company: "Coursera",
    employmentType: "Certification Course",
    description: [
      "Completed an intensive course on data structures and algorithms to enhance problem-solving skills.",
      "Gained proficiency in fundamental algorithms, including sorting, searching, and dynamic programming.",
      "Implemented various data structures (e.g., arrays, linked lists, trees) in programming exercises.",
    ],
  },
  {
    date: "06/2021 – 08/2021",
    title: "Web Development",
    company: "Medi-Caps University",
    employmentType: "Certification Course",
    description: [
      "Built interactive and responsive web applications using HTML, CSS, and JavaScript.",
      "Developed a project using React for frontend development, focusing on single-page application (SPA) functionality.",
      "Learned backend basics with Node.js and Express, connecting applications to a database using MongoDB.",
    ],
  },
];

function Experience() {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#f5f7fa",
        color: "#000",
        minHeight: "100%",
      }}
    >
      <Container sx={{ marginTop: 4 }}>
        <Timeline position="right">
          {experienceData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="textSecondary"
              >
                <Box
                  sx={{
                    padding: 1,
                    backgroundColor: "#E1306C",
                    color: "black",
                    width: "123px",
                    display: "inline-block",
                    textAlign: "center",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      right: "-10px",
                      transform: "translateY(-50%)",
                      borderTop: "20px solid transparent",
                      borderBottom: "20px solid transparent",
                      borderLeft: "10px solid #E1306C",
                    },
                  }}
                >
                  {item.date}
                </Box>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index < experienceData.length && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: 2, px: 3 }}>
                <Typography variant="h6" component="span">
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {item.company} · {item.employmentType}
                </Typography>
                <Box component="ul" sx={{ paddingLeft: 3, marginTop: 1 }}>
                  {item.description.map((point, idx) => (
                    <ListItem
                      key={idx}
                      disableGutters
                      sx={{ display: "list-item" }}
                    >
                      <ReactMarkdown
                        children={point}
                        components={{
                          p: "span",
                        }}
                      />
                    </ListItem>
                  ))}
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}

export default Experience;
