import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Image from "../imgs/unseen.png";

const UnseenSpending = () => {
  return (
    <>
      <Box>
        <Container
          maxWidth="lg"
          className="d-flex justify-content-between align-items-center py-5"
        >
          <Box className="w-50">
            <img className="text-center" src={Image} alt="" />
          </Box>

          <Box className="w-50">
            <Typography variant="h4" className="fw-bold text-dark">
              The unseen of spending three years at Pixelgrade
            </Typography>

            <Typography variant="h6" className="fs-6 text-secondary my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
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

export default UnseenSpending;
