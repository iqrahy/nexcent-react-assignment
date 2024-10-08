import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Local1 from "../imgs/local1.png";
import Local2 from "../imgs/local2.png";
import Local3 from "../imgs/local4.png";
import Local4 from "../imgs/local3.png";

const LocalBusiness = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F5F7FA" }}>
        <Container
          maxWidth="lg"
          className="d-flex justify-content-between align-items-center py-5"
        >
          <Box>
            <Typography variant="h4" className="fw-bold text-dark">
              Helping a local
            </Typography>
            <Typography
              variant="h4"
              className="fw-bold"
              sx={{ color: "#4CAF4F" }}
            >
              business reinvent itself
            </Typography>
            <Typography variant="h6" className="fs-6 my-2">
              We reached here with our hard work and dedication
            </Typography>
          </Box>

          <Box className="d-flex flex-wrap w-50 gap-5">

            <Box className="d-flex align-items-center bg-transparent">
              <img className="w-100 p-2 me-2" src={Local1} alt="" />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box>
                  <Typography className="fw-bold" component="div" variant="h5">
                    2,245,341
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    className="fs-6"
                    sx={{ color: "text.secondary" }}
                  >
                    Members
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="d-flex align-items-center bg-transparent">
              <img className="w-100 p-2 me-2" src={Local2} alt="" />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box>
                  <Typography className="fw-bold" component="div" variant="h5">
                  46,328
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    className="fs-6"
                    sx={{ color: "text.secondary" }}
                  >
                    Clubs
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="d-flex align-items-center bg-transparent">
              <img className="w-100 p-2 me-2 img-fluid" src={Local3} alt="" />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box>
                  <Typography className="fw-bold" component="div" variant="h5">
                  828,867
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    className="fs-6"
                    sx={{ color: "text.secondary" }}
                  >
                    Bookings
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="d-flex align-items-center bg-transparent">
              <img className="w-100 p-2 me-2" src={Local4} alt="" />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box>
                  <Typography className="fw-bold" component="div" variant="h5">
                  1,926,436
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    className="fs-6"
                    sx={{ color: "text.secondary" }}
                  >
                    Payments
                  </Typography>
                </Box>
              </Box>
            </Box>

          </Box>
        </Container>
      </Box>
    </>
  );
};

export default LocalBusiness;
