import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #057575', background: '#013942', borderRadius: '40px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#013942', borderRadius: '40px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px', borderTop: '4px solid #057575' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 180, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#0edfff" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
