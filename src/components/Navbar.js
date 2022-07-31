import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

const Navbar = () => (
  <Stack className='navbar' direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/" style={{textDecoration: 'none', top: "20px"}}>
      <Typography className='top' fontSize={'30px'}  style={{  width: '48px', height: '48px', margin: '0px 20px' }}>
       Fitness@Home
      </Typography>
    </Link>
    <Stack 
      direction="row"
      gap="50px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      margin={'auto'}
      pt={'-10px'}
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#057575', borderBottom: '3px solid #057575' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#057575' }}>Exercises</a>
      <a href="#Aboutus" style={{ textDecoration: 'none', color: '#057575' }}>About us</a>
      <a href="#login" type='button' style={{ textDecoration: 'none', color: '#057575' }}>Login</a>
    </Stack>
  </Stack>
);

export default Navbar;
