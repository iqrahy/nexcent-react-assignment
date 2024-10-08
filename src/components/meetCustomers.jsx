import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Meet from "../imgs/meet customers.png";
import Logo1 from "../imgs/Logo0.png";
import Logo2 from "../imgs/Logo (1).png";
import Logo3 from "../imgs/Logo (2).png";
import Logo4 from "../imgs/Logo (3).png";
import Logo5 from "../imgs/Logo (4).png";
import Logo6 from "../imgs/Logo (5).png";
import { Icon } from "@iconify/react/dist/iconify.js";

const MeetCustomers = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F5F7FA" }}>
        <Container
          maxWidth="lg"
          className="d-flex align-items-center py-5 gap-5"
        >
          <Box>
            <img className="text-center" src={Meet} alt="" />
          </Box>

          <Box>
            <Typography variant="h6" className="fs-6 text-secondary my-2">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </Typography>

            <Typography sx={{ color: "#4CAF4F" }} variant="h6">
              Tim Smith
            </Typography>
            <Typography variant="body2" className="fs-6 text-secondary">
              British Dragon Boat Racing Association
            </Typography>

            <Box className="d-flex justify-content-between align-items-center mt-4">
              <img src={Logo1} alt="" />
              <img src={Logo2} alt="" />
              <img src={Logo3} alt="" />
              <img src={Logo4} alt="" />
              <img src={Logo5} alt="" />
              <img src={Logo6} alt="" />
              <Button
                variant="text h6"
                className="me-3 text-capitalize "
                sx={{ color: "#4CAF4F", letterSpacing: 2 }}
              >
               Meet all customers <Icon className="ms-2" icon="teenyicons:arrow-right-outline" />
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MeetCustomers;
