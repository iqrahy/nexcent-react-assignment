import { Box, Container, Divider, IconButton, InputBase, Link, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import FooterLogo from "../imgs/footer logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#263238" }}>
        <Container
          maxWidth="lg"
          className="text-white d-flex justify-content-between py-5"
        >
          <Box className="d-flex flex-column gap-5">
            <img src={FooterLogo} alt="" />
            <Typography className="fs-6">
              Copyright © 2020 Nexcent ltd. <br /> All rights reserved
            </Typography>
            <Box className="text-white fs-1 d-flex gap-3 align-items-center">
              <Icon
                className="p-2 rounded-circle bg-secondary"
                icon="hugeicons:instagram"
              />
              <Icon
                className="p-2 rounded-circle bg-secondary"
                icon="lets-icons:world-light"
              />
              <Icon
                className="p-2 rounded-circle bg-secondary"
                icon="uim:twitter"
              />
              <Icon
                className="p-2 rounded-circle bg-secondary"
                icon="bi:youtube"
              />
            </Box>
          </Box>

          <Box>
            <Typography variant="h5">Company</Typography>
            <Box className="d-flex justify-content-center flex-column gap-3 mt-3">
              <Link className="text-white" href="#" underline="none">
                About us
              </Link>
              <Link className="text-white" href="#" underline="none">
                Blog
              </Link>
              <Link className="text-white" href="#" underline="none">
                Contact us
              </Link>
              <Link className="text-white" href="#" underline="none">
                Pricing
              </Link>
              <Link className="text-white" href="#" underline="none">
                Testimonials
              </Link>
            </Box>
          </Box>

          <Box>
            <Typography variant="h5">Support</Typography>
            <Box className="d-flex justify-content-center flex-column gap-3 mt-3">
              <Link className="text-white" href="#" underline="none">
                Help center
              </Link>
              <Link className="text-white" href="#" underline="none">
                Terms of service
              </Link>
              <Link className="text-white" href="#" underline="none">
                Legal
              </Link>
              <Link className="text-white" href="#" underline="none">
                Privacy policy
              </Link>
              <Link className="text-white" href="#" underline="none">
                Status
              </Link>
            </Box>
          </Box>

          <Box>
            <Typography variant="h5">Stay up to date</Typography>
            <Paper
              component="form"
              className="bg-secondary mt-3"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 380,
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
              </IconButton>
              <InputBase
              className="text-white"
                sx={{ ml: 1, flex: 1 }}
                placeholder="Your email address"
                inputProps={{ "aria-label": "Your email address" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              </IconButton>
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
              >
                <Icon className="text-white" icon="cil:send"></Icon>
              </IconButton>
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
