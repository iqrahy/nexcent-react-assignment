import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import MarketingImage1 from "../imgs/marketing1.png"
import MarketingImage2 from "../imgs/marketing2.png"
import MarketingImage3 from "../imgs/marketing3.png"

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

          <Box>


            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 190 }}
                image={MarketingImage1}
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Creating Streamlined Safeguarding Processes with OneRen
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Readmore</Button>
              </CardActions>
            </Card>


          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Marketing;
