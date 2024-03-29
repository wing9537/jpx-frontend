import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Menu,
  Avatar,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { getToken, getUserName, logout } from "../../redux/userSlice";
import { openDialog } from "../../redux/dialogSlice";
import SearchBar from "./SearchBar";

function Nav() {
  const { t, i18n } = useTranslation("layout");
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const userName = useSelector(getUserName);
  const menuItems = t("menu", { returnObjects: true });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    if (token) {
      setAnchorElUser(event.currentTarget);
    } else {
      dispatch(openDialog("login")); // open login dialog
    }
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const switchPage = (page) => {
    if (page == "logout") {
      dispatch(logout());
    } else {
      handleCloseUserMenu();
      navigate(`/${page}/profile`);
    }
  };

  const changeLanguage = () => {
    return i18n.language == "en"
      ? i18n.changeLanguage("zh")
      : i18n.changeLanguage("en");
  };

  return (
    <AppBar
      position="sticky"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {t("title")}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              PaperProps={{ sx: { width: "100%" } }}
            >
              <SearchBar></SearchBar>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {t("title")}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <SearchBar></SearchBar>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button onClick={changeLanguage} color="inherit" disableRipple>
              <Typography variant="h6">
                {i18n.language == "en" ? "EN" : "中"}
              </Typography>
            </Button>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar>{userName.toUpperCase()[0]}</Avatar>
            </IconButton>
            {token && (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {Object.entries(menuItems).map(([page, name]) => {
                  return (
                    <MenuItem key={page} onClick={() => switchPage(page)}>
                      <Typography textAlign="center">{name}</Typography>
                    </MenuItem>
                  );
                })}
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
