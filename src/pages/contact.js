import React from "react";
import { Box, Typography, IconButton, Grid, Link, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#a55126",
        color: "white",
        padding: 4,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          fontFamily: "'Georgia', serif",
          fontWeight: 600,
          marginBottom: 2,
        }}
      >
        Reach out if you want <br /> to create impactful <br />
        <Typography
          component="span"
          variant="h6"
          sx={{
            textDecoration: "underline",
            textDecorationStyle: "wavy",
            textDecorationColor: "#ffffff",
          }}
        >
          visual art together.
        </Typography>
      </Typography>

      <Typography
        textAlign="center"
        sx={{ fontFamily: "'Arial', sans-serif", marginTop: 3 }}
      >
        TO SEE MORE OF MY WORK, VISIT MY SOCIALS:
      </Typography>
      <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
        <IconButton
          component={Link}
          href="https://linkedin.com/in/lokendra-patidar-969285203"
          target="_blank"
        >
          <LinkedInIcon sx={{ color: "white", fontSize: 32 }} />
        </IconButton>
        <IconButton
          component={Link}
          href="https://github.com/loken-lokendra"
          target="_blank"
        >
          <GitHubIcon sx={{ color: "white", fontSize: 32 }} />
        </IconButton>
        <IconButton
          component={Link}
          href="https://instagram.com"
          target="_blank"
        >
          <InstagramIcon sx={{ color: "white", fontSize: 32 }} />
        </IconButton>
        <IconButton component={Link} href="https://twitter.com" target="_blank">
          <TwitterIcon sx={{ color: "white", fontSize: 32 }} />
        </IconButton>
      </Box>

      <Grid container spacing={4} sx={{ marginTop: 5 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}
        >
          <IconButton sx={{ color: "white" }}>
            <PhoneIcon sx={{ fontSize: 36 }} />
          </IconButton>
          <Typography sx={{ fontSize: "1.2rem" }}>PHONE</Typography>
          <Typography>+91 7737727213</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}
        >
          <IconButton sx={{ color: "white" }}>
            <EmailIcon sx={{ fontSize: 36 }} />
          </IconButton>
          <Typography sx={{ fontSize: "1.2rem" }}>EMAIL</Typography>
          <Typography>loken7213@gmail.com</Typography>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{
          marginTop: 4,
          backgroundColor: "white",
          color: "#a55126",
          fontWeight: "bold",
          paddingX: 4,
          paddingY: 1.5,
          "&:hover": {
            backgroundColor: "#ffffffcc",
          },
        }}
        href="https://drive.google.com/file/d/1y6yT427X46p6G-dTuHuDu6kS96vN_7D3/view?usp=sharing"
        download="Lokendra_Resume.pdf"
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default Contact;
