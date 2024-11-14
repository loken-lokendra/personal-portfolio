import React from "react";
import { Box, Typography, LinearProgress, Container } from "@mui/material";

function About() {
  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "ReactJS", level: 85 },
    { name: "Java", level: 75 },
    { name: "NodeJS", level: 80 },
    { name: "Django", level: 70 },
    { name: "MongoDB", level: 90 },
    { name: "Framer Motion", level: 70 },
  ];

  return (
    <Box
      sx={{
        padding: 4,
        paddingTop: 10,
        backgroundColor: "#f5f7fa",
        color: "#000",
        minHeight: "100%",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ flex: 1, paddingRight: { md: 4 } }}>
          <Typography
            variant="h6"
            gutterBottom
            color="#E1306C"
            sx={{ fontWeight: 600 }}
          >
            ABOUT ME
          </Typography>
          <Typography variant="h4" gutterBottom>
            DESIGNER & DEVELOPER
          </Typography>
          <Typography variant="body1" paragraph>
            As a versatile software developer, I specialize in building
            high-performance applications that prioritize user experience and
            functionality. My work involves crafting clean, efficient code,
            leveraging modern frameworks, and maintaining a keen eye for design
            aesthetics to ensure seamless interfaces.
          </Typography>
          <Typography variant="body1" paragraph>
            I am passionate about innovation and dedicated to staying current
            with industry trends, from responsive web design to optimized
            backend systems. My goal is to bridge the gap between design and
            technology, transforming complex ideas into impactful digital
            solutions.
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }}>
          {skills.map((skill) => (
            <Box key={skill.name} sx={{ marginBottom: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {skill.name}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{
                  height: 8,
                  backgroundColor: "#333",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#E1306C",
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{ textAlign: "right", marginTop: 0.5 }}
              >
                {`${skill.level}%`}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default About;
