import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import Logo from "../imgs/Logo.png";

const Header = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#F5F7FA" }}>
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            className="d-flex align-items-center justify-content-between"
          >
            <Box className="d-flex align-item-center">
              <img src={Logo} alt="Logo" />
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Link
                href="#"
                className="text-black fw-normal mx-3"
                underline="none"
              >
                {"Home"}
              </Link>

              <Link
                href="#"
                className="text-black fw-normal mx-3"
                underline="none"
              >
                {"Service"}
              </Link>

              <Link
                href="#"
                className="text-black fw-normal mx-3"
                underline="none"
              >
                {"Feature"}
              </Link>

              <Link
                href="#"
                className="text-black fw-normal mx-3"
                underline="none"
              >
                {"Product"}
              </Link>

              <Link
                href="#"
                className="text-black fw-normal mx-3"
                underline="none"
              >
                {"Testimonial"}
              </Link>

              <Link
                href="#"
                className="text-black fw-normal mx-3"
                underline="none"
              >
                {"FAQ"}
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="text"
                className="me-3 text-capitalize py-2 px-4"
                sx={{ color: "#4CAF4F" }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                className="text-capitalize py-2 px-4"
                sx={{ backgroundColor: "#4CAF4F" }}
              >
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
