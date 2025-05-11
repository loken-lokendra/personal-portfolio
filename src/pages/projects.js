import React from "react";

import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Container,
  Typography,
} from "@mui/material";
import Contact from "./contact";

const projects = [
  {
    title: "BlockBite: Food Delevery App",
    image:
      "https://preview.redd.it/i-designed-this-food-delivery-app-ui-for-the-first-time-im-v0-buzczsql8di81.jpg?auto=webp&s=cd787bfc69959f3c14aca527990244e59e4aa737",
    link: "https://food-deelevery-react-app.vercel.app/home",
  },
  {
    title: "Drive Safe: Traffic Sign Recognition",
    image:
      "https://cdn.analyticsvidhya.com/wp-content/uploads/2024/10/traffic-sign-classification-phases-6704e55d65e1a-1.webp",
    link: "https://github.com/loken-lokendra/traffic-sign-reconginition",
  },
  {
    title: "Daily Journal: Blog Platform",
    image:
      "https://repository-images.githubusercontent.com/659057322/6564000a-fb32-4847-b7df-ac7a72653487",
    link: "",
  },
  {
    title: "Meme Generator",
    image:
      "https://i.ytimg.com/vi/RK_GOT6foZA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDu-JaC22cQgr3ZfjpC38xcC2dAhg",
    link: "https://github.com/loken-lokendra/Meme-Generator",
  },
];

const Projects = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f7f8fa",
          padding: 4,
          minHeight: "100vh",
        }}
      >
        <Container sx={{ marginTop: 4, textAlign: "center" }}>
          <Typography variant="h4" color="#E1306C" sx={{ fontWeight: 600 }}>
            PROJECTS
          </Typography>
          <Typography variant="body1">
            Here are some of the projects I worked on.
          </Typography>
        </Container>
        <Container sx={{ marginTop: 6 }}>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ borderRadius: 2 }}>
                  <CardActionArea
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={project.image}
                      alt={project.title}
                    />
                  </CardActionArea>
                </Card>
                <Typography
                  variant="h6"
                  textAlign="center"
                  sx={{
                    // fontFamily: "Cursive",
                    fontWeight: 600,
                  }}
                >
                  {project.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Contact />
    </>
  );
};

export default Projects;
