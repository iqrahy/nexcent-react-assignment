import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import BackgroundImage from "../imgs/Illustration.png";
import dotImg from "../imgs/Dot.png";

const Hero = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F5F7FA" }}>
        <Container
          maxWidth="lg"
          className="d-flex justify-content-between align-items-center py-5"
        >
          <Box>
            <Typography variant="h3" className="fw-bold text-dark">
              {"Lessons and insights"}
            </Typography>
            <Typography
              variant="h3"
              className="fw-bold"
              sx={{ color: "#4CAF4F" }}
            >
              {"from 8 years"}
            </Typography>
            <Typography variant="h6" className="fs-6 text-secondary my-2">
              {
                "Where to grow your business as a photographer: site or social media?"
              }
            </Typography>
            <Button
              variant="contained"
              className="mt-3 py-2 px-4 text-capitalize"
              sx={{ backgroundColor: "#4CAF4F" }}
            >
              Register
            </Button>
          </Box>
          <Box>
            <img className="text-center" src={BackgroundImage} alt="" />
          </Box>
        </Container>
        <Box className="d-flex justify-content-center pb-3">
          <img src={dotImg} alt="" />
        </Box>
      </Box>
    </>
  );
};

export default Hero;
