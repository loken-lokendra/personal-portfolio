import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme, useMediaQuery } from "@mui/material";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: "HOME", link: "/" },
    { text: "About", link: "/about" },
    { text: "Experience", link: "/experience" },
    { text: "Projects", link: "/projects" },
    { text: "Contact", link: "/contact" },
  ];

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{ backgroundColor: "#f7f8fa" }}
    >
      <Container>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            paddingX: 2,
          }}
        >
          <Box display="flex" alignItems="center">
            <Avatar
              alt="Profile"
              src="/images/profile-picture.jpg"
              sx={{ marginRight: 1 }}
            />
            <Typography
              variant="h6"
              color="textPrimary"
              sx={{ fontWeight: 600 }}
            >
              Lokendra
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <IconButton onClick={toggleDrawer}>
                  <CloseIcon />
                </IconButton>
                <Box
                  sx={{
                    width: 250,
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt="Profile"
                    src="/images/profile-picture.jpg"
                    sx={{ width: 80, height: 80, marginBottom: 2 }}
                  />

                  <List>
                    {menuItems.map((item) => (
                      <ListItem
                        button
                        key={item.text}
                        onClick={toggleDrawer}
                        component={RouterLink}
                        sx={{
                          textDecoration: "none",
                          backgroundColor:
                            location.pathname === item.link
                              ? theme.palette.action.hover
                              : "transparent",
                          borderRadius: 1,
                        }}
                        to={item.link}
                      >
                        <Typography
                          variant="button"
                          color="textPrimary"
                          sx={{ fontWeight: 600 }}
                        >
                          {item.text}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box display="flex" alignItems="center" gap={3}>
              {menuItems.map((item) => (
                <ListItem
                  button
                  component={RouterLink}
                  to={item.link}
                  underline="none"
                  sx={{
                    textDecoration: "none",
                    backgroundColor:
                      location.pathname === item.link
                        ? theme.palette.action.hover
                        : "transparent",
                    borderRadius: 1,
                    paddingX: 2,
                  }}
                  key={item.text}
                >
                  <Typography
                    variant="button"
                    color="textPrimary"
                    sx={{ fontWeight: 600 }}
                  >
                    {item.text}
                  </Typography>
                </ListItem>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
