import React from 'react';
import { Stack, Typography } from '@mui/material';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #057575', background: '#013942', borderRadius: '40px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#013942', borderRadius: '40px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px', borderTop: '4px solid #057575' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <Typography fontSize="34px" fontWeight="bold" fontFamily="Alegreya" color="#0edfff" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
