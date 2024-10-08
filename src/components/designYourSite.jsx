import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import PanaImage from "../imgs/pana.png"

const DesignYourSite = () => {
  return (
    <>
      <Box>
        <Container
          maxWidth="lg"
          className="d-flex justify-content-between align-items-center py-5"
        >
          <Box className="w-50">
            <img className="text-center" src={PanaImage} alt="" />
          </Box>

          <Box className="w-50">
            <Typography variant="h4" className="fw-bold text-dark">
              How to design your site footer like we did
            </Typography>

            <Typography variant="h6" className="fs-6 text-secondary my-2">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </Typography>
            <Button
              variant="contained"
              className="mt-3 py-2 px-4 text-capitalize"
              sx={{ backgroundColor: "#4CAF4F" }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DesignYourSite;
