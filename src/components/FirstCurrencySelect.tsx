'use client';

import { Box, Container } from '@mui/material';
import React from 'react';
import Welcome from './Welcome';
import WelcomeBanner from './WelcomeBanner';
import { useAppSelector } from '@/store/hooks';
import { redirect } from 'next/navigation';

const FirstCurrencySelect = () => {
  const { fromCurrency } = useAppSelector((state) => state.currencyState);

  if (fromCurrency) {
    redirect('/converter');
  }

  return (
    <Container maxWidth="tablet">
      <Box
        mt={8}
        gap={5}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Welcome />
        <WelcomeBanner />
      </Box>
    </Container>
  );
};

export default FirstCurrencySelect;
