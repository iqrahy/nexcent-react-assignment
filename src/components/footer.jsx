import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import FooterLogo from "../imgs/footer logo.png"
import { Icon } from '@iconify/react/dist/iconify.js'

const Footer = () => {
  return (
    <>
    <Box sx={{ backgroundColor: "#263238"}}>
        <Container maxWidth="lg"  className="text-white d-flex justify-content-between align-items-center py-5">
            
            <Box className="d-flex flex-column border">
                <img src={FooterLogo} alt="" />
                <Typography className='fs-6'>
                Copyright © 2020 Nexcent ltd. <br/> All rights reserved
                </Typography>
                <Box className="text-white fs-2">
                <Icon className="ms-2" icon="hugeicons:instagram" />
                <Icon className="ms-2" icon="lets-icons:world-light" />
                <Icon className="ms-2" icon="uim:twitter" />
                <Icon className="ms-2" icon="bi:youtube" />
                </Box>
            </Box>
            
            
            <Box></Box>
            
            
            <Box></Box>
            
            
            <Box></Box>
        
        </Container>
    </Box>
    </>
  )
}

export default Footer