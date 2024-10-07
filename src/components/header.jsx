import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../imgs/Icon.png";
import { Link } from "@mui/material";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#F5F7FA" }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters className="d-flex align-items-center justify-content-between">
           
           <Box className="d-flex align-item-center">
           <img src={Logo} alt="Logo" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                marginLeft: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: "bold",
                color: "black",
                textDecoration: "none",
              }}
            >
              Nexcent
            </Typography>
           </Box>

            <Box sx={{ flexGrow: 0, }}>

              <Link href="#" className="text-black fw-normal mx-3" underline="none">
                {'Home'}
              </Link>

              <Link href="#" className="text-black fw-normal mx-3" underline="none">
                {'Service'}
              </Link>

              <Link href="#" className="text-black fw-normal mx-3" underline="none">
                {'Feature'}
              </Link>

              <Link href="#" className="text-black fw-normal mx-3" underline="none">
                {'Product'}
              </Link>

              <Link href="#" className="text-black fw-normal mx-3"  underline="none">
                {'Testimonial'}
              </Link>

              <Link href="#" className="text-black fw-normal mx-3" underline="none">
                {'FAQ'}
              </Link>

            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="text"
                className="me-3 text-capitalize"
                sx={{ color: "#4CAF4F" }}
              >
                Login
              </Button>
              <Button variant="contained" sx={{ backgroundColor: "#4CAF4F" }}>
                Sign up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
