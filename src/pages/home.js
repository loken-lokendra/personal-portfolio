import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Container,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import About from "./about";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column-reverse", md: "row" },
          minHeight: "100vh",
          padding: { xs: 2, md: 2 },
          paddingTop: { md: 1 },
          backgroundColor: "#f7f8fa",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{ textAlign: { xs: "center", md: "left" }, marginBottom: 4 }}
          >
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              WELCOME TO MY WORLD
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: "bold",
                color: "#333",
              }}
            >
              Hi, I'm <span style={{ color: "#ff3e58" }}>Lokendra Patidar</span>
            </Typography>
            <Typography
              variant="h3"
              sx={{
                display: "inline-block",
                marginTop: 1,
                fontWeight: "bold",
              }}
            >
              <span style={{ color: "#ff3e58" }}>a</span>{" "}
              <Typewriter
                words={["Developer.", "Professional Coder."]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ marginTop: 2 }}
            >
              I leverage animation as a tool to enhance user engagement and
              simplify complex interactions. By integrating motion thoughtfully,
              I aim to create intuitive and immersive experiences that add
              value, ensuring every interaction is purposeful and enhances
              functionality, not just aesthetics.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <Box>
              <Typography variant="body1">FIND WITH ME</Typography>

              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <IconButton
                    href="#"
                    target="_blank"
                    sx={{
                      color: "#E1306C",
                      "&:hover": { transform: "scale(1.2)" },
                      transition: "transform 0.3s",
                    }}
                  >
                    <InstagramIcon fontSize="large" />
                  </IconButton>
                </Grid>

                <Grid item>
                  <IconButton
                    href="https://www.linkedin.com/in/lokendra-patidar-969285203"
                    target="_blank"
                    sx={{
                      color: "#0077B5",
                      "&:hover": { transform: "scale(1.2)" },
                      transition: "transform 0.3s",
                    }}
                  >
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                </Grid>

                <Grid item>
                  <IconButton
                    href="https://github.com/loken-lokendra"
                    target="_blank"
                    sx={{
                      color: "#333",
                      "&:hover": { transform: "scale(1.2)" },
                      transition: "transform 0.3s",
                    }}
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Typography variant="body1">BEST SKILL ON</Typography>
              <Grid container spacing={2} justifyContent="center">
                <Grid item sx={{ mr: 1 }}>
                  <Avatar
                    alt="Reactjs"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s"
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>

                <Grid item sx={{ mr: 1 }}>
                  <Avatar
                    alt="Nodejs"
                    src="https://www.smartsight.in/wp-content/uploads/2021/09/NodeJS.jpg"
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>

                <Grid item sx={{ mr: 1 }}>
                  <Avatar
                    alt="Python"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKSkjA64ptIZHXfiI4AA-6w2U-_d5t1h2ojQ&s"
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
                <Grid item>
                  <Avatar
                    alt="Django"
                    src="https://imagedelivery.net/qc7VvyphMGWFiPVvTbB-ww/swapps.com/2019/04/django-faster.jpg/w=1600,h=900"
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              marginTop: 4,
              backgroundColor: "#E1306C",
              color: "black",
              fontWeight: "bold",
              paddingX: 4,
              paddingY: 1.5,
              "&:hover": {
                backgroundColor: "white",
              },
            }}
            href="https://drive.google.com/file/d/1y6yT427X46p6G-dTuHuDu6kS96vN_7D3/view?usp=sharing"
            download="Lokendra_Resume.pdf"
          >
            Download Resume
          </Button>
        </Container>

        <Box sx={{ textAlign: { xs: "center", md: "right" }, padding: 3 }}>
          <Avatar
            alt="Lokendra Patidar"
            src="/images/profile-picture.jpg"
            sx={{
              width: { xs: 200, md: 400 },
              height: { xs: 200, md: 400 },
              borderRadius: "10px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>
      </Box>
      <About />
    </>
  );
};

export default Home;
