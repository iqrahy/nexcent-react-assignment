import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Logo1 from "../imgs/Logo0.png";
import Logo2 from "../imgs/Logo (1).png";
import Logo3 from "../imgs/Logo (2).png";
import Logo4 from "../imgs/Logo (3).png";
import Logo5 from "../imgs/Logo (4).png";
import Logo6 from "../imgs/Logo (5).png";

const Client = () => {
  return (
    <>
      <Container maxWidth="lg" className="my-5">
        <Box className="text-center">
          <Typography variant="h4" className="fw-bold">
            Our Clients
          </Typography>
          <Typography variant="h6" className="fs-6 text-secondary my-2">
            We have been working with some Fortune 500+ clients
          </Typography>
        </Box>
        <Box className="d-flex justify-content-between align-items-center mt-4">
          <img src={Logo1} alt="" />
          <img src={Logo2} alt="" />
          <img src={Logo3} alt="" />
          <img src={Logo4} alt="" />
          <img src={Logo5} alt="" />
          <img src={Logo6} alt="" />
          <img src={Logo3} alt="" />
        </Box>
      </Container>
    </>
  );
};

export default Client;
