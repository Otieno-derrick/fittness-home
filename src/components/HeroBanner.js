import React from 'react';
import { Box } from '@mui/material';

import vida from '../assets/images/Fitness.mp4';

const HeroBanner = () => (
  <Box className='main' sx={{ mt: { lg: '1px', xs: '70px' }, ml: { sm: '' } }} position="" p="">
    
       <video src={vida} autoPlay loop muted />

  </Box>
);

export default HeroBanner;
