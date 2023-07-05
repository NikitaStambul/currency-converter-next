'use client';

import React from 'react';
import { Grid, IconButton } from '@mui/material';
import ConverterCard from './ConverterCard';
import swapIcon from '@/assets/swap.svg';
import swapArrows from '@/assets/arrow-swap-horizontal.svg';
import { useAppDispatch } from '../store/hooks';
import { swapCurrencies } from '../store/slices/currencySlice';
import { swapAmount } from '../store/slices/amountSlice';
import Image from 'next/image';
import GradientButton from './GradientButton';

const Converter = () => {
  const dispatch = useAppDispatch();

  const handleSwapClick = () => {
    dispatch(swapCurrencies());
    dispatch(swapAmount());
  };

  return (
    <Grid container spacing={2} position="static">
      <Grid item mobile={12} tablet={6}>
        <ConverterCard isFrom />
      </Grid>
      <Grid item mobile={12} display={{ mobile: 'flex', tablet: 'none' }}>
        <GradientButton
          sx={{ width: '100%' }}
          onClick={handleSwapClick}
          startIcon={<Image src={swapArrows} alt="swap currencies" />}
        >
          Swap Currencies
        </GradientButton>
      </Grid>
      <IconButton
        onClick={handleSwapClick}
        sx={{
          display: {
            mobile: 'none',
            tablet: 'flex',
          },
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Image src={swapIcon} alt="swap currencies" />
      </IconButton>
      <Grid item mobile={12} tablet={6}>
        <ConverterCard />
      </Grid>
    </Grid>
  );
};

export default Converter;
