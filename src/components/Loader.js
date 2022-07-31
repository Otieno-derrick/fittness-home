import React from 'react';
import { Stack } from '@mui/material';
import { Grid } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <Grid color="#013942" />
  </Stack>
);

export default Loader;
