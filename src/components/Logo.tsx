import React from 'react';
import { Stack, Typography } from '@mui/material';
import swapIcon from '../assets/logo-icon.svg';
import Image from 'next/image';

const Logo = () => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Image src={swapIcon} alt='swap icon' />
      <Typography variant='logo'>Currency Converter</Typography>
    </Stack>
  );
};

export default Logo;
