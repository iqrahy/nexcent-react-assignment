import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import MarketingImage1 from "../imgs/marketing1.png";
import MarketingImage2 from "../imgs/marketing2.png";
import MarketingImage3 from "../imgs/marketing3.png";
import { Icon } from "@iconify/react/dist/iconify.js";

const Marketing = () => {
  return (
    <>
      <Box>
        <Container maxWidth="lg" className="py-5">
          <Box className="d-flex justify-content-center">
            <Box className="w-50 text-center">
              <Typography variant="h4" className="fw-bold">
                Caring is the new marketing
              </Typography>
              <Typography variant="h6" className="fs-6 text-secondary my-2">
                The Nexcent blog is the best place to read about the latest
                membership insights, trends and more. See who's joining the
                community, read about how our community are increasing their
                membership income and lot's more.​
              </Typography>
            </Box>
          </Box>

          <Box className="d-flex justify-content-between align-items-center">
            <Card sx={{ maxWidth: 300 }} className="text-center">
              <CardMedia sx={{ height: 190 }} image={MarketingImage1} />
              <CardContent>
                <Typography
                  className="fs-6 fw-bold"
                  sx={{ color: "text.secondary" }}
                >
                  Creating Streamlined Safeguarding Processes with OneRen
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="text h6"
                  className="me-3 text-capitalize w-100"
                  sx={{ color: "#4CAF4F", letterSpacing: 2 }}
                >
                  Readmore
                  <Icon
                    className="ms-2"
                    icon="teenyicons:arrow-right-outline"
                  />
                </Button>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 300 }} className="text-center">
              <CardMedia sx={{ height: 190 }} image={MarketingImage2} />
              <CardContent>
                <Typography
                  className="fs-6 fw-bold"
                  sx={{ color: "text.secondary" }}
                >
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="text h6"
                  className="me-3 text-capitalize w-100"
                  sx={{ color: "#4CAF4F", letterSpacing: 2 }}
                >
                  Readmore
                  <Icon
                    className="ms-2"
                    icon="teenyicons:arrow-right-outline"
                  />
                </Button>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 300 }} className="text-center">
              <CardMedia sx={{ height: 190 }} image={MarketingImage3} />
              <CardContent>
                <Typography
                  className="fs-6 fw-bold"
                  sx={{ color: "text.secondary" }}
                >
                  Revamping the Membership Model with Triathlon Australia
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="text h6"
                  className="me-3 text-capitalize w-100"
                  sx={{ color: "#4CAF4F", letterSpacing: 2 }}
                >
                  Readmore
                  <Icon
                    className="ms-2"
                    icon="teenyicons:arrow-right-outline"
                  />
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Container>
        <Box sx={{ backgroundColor: "#F5F7FA" }}>
        <Container maxWidth="lg" className="py-5 text-center d-flex justify-content-center align-items-center flex-column w-50">
            <Typography variant="h3" className="fw-medium">
              Pellentesque suscipit <br/> fringilla libero eu.
            </Typography>
            <Button
              variant="contained"
              className="text-capitalize py-2 px-4 mt-3"
              sx={{ backgroundColor: "#4CAF4F" }}
            >
              Get a Demo
              <Icon className="ms-2" icon="teenyicons:arrow-right-outline" />
            </Button>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Marketing;
