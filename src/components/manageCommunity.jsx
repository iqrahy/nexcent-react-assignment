import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import cardImage1 from "../imgs/cardImg-1.png";
import card2 from "../imgs/card2.png";
import card3 from "../imgs/card3.png";

const ManageCommunity = () => {
  return (
    <>
      <Container maxWidth="lg" className="my-5 py-3">
        <Box className="text-center pt-4">
          <Typography variant="h4" className="fw-bold">
            Manage your entire community <br /> in a single system
          </Typography>
          <Typography variant="h6" className="fs-6 text-secondary my-2">
            Who is Nextcent suitable for?
          </Typography>
        </Box>

        <Box className="d-flex justify-content-between align-items-center mt-3">
          <Card sx={{ maxWidth: 345 }} className="text-center p-4">
            <img src={cardImage1} alt="" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                className="fw-bold"
                component="div"
              >
                Membership Organisations
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Our membership management software provides full automation of
                membership renewals and payments
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345 }} className="text-center p-4">
            <img src={card2} alt="" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                className="fw-bold"
                component="div"
              >
                National Associations
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Our membership management software provides full automation of
                membership renewals and payments
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345 }} className="text-center p-4">
            <img src={card3} alt="" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                className="fw-bold"
                component="div"
              >
                Clubs And Groups
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Our membership management software provides full automation of
                membership renewals and payments
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default ManageCommunity;
