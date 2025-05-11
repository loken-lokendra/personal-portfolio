import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#f5f7fa",
        color: "#333",
        minHeight: "100px",
      }}
    >
      <Avatar
        src="/images/profile-picture.jpg"
        alt="User Avatar"
        sx={{ width: 56, height: 56, mb: 1 }}
      />
      <Typography variant="h6" component="div">
        LOKENDRA PATIDAR
      </Typography>

      <Typography variant="body2" color="textSecondary">
        © 2024. All rights reserved.
      </Typography>
      <Typography variant="body2" color="textprimary">
        Made with ❤️ by Lokendra Patidar.
      </Typography>
    </Box>
  );
}

export default Footer;
