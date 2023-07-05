'use client';

import { Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getLocaleData } from '../api/locale';
import { setFromCurrency } from '../store/slices/currencySlice';
import CurrencySelect from './CurrencySelect';
import { useAppDispatch } from '../store/hooks';
import { getCurrencyName } from '../helpers/getCurrencyName';
import GradientButton from './GradientButton';

const WelcomeBanner = () => {
  const dispatch = useAppDispatch();
  const [guessedCurrency, setGuessedCurrency] = useState('');

  useEffect(() => {
    async function getGuessedCurrency() {
      try {
        const locale = await getLocaleData();

        setGuessedCurrency(locale.data.currency);
      } catch (error) {
        setGuessedCurrency('UAH');
      }
    }

    getGuessedCurrency();
  }, []);

  const handleAcceptGuess = () => {
    dispatch(setFromCurrency(guessedCurrency));
  };

  return (
    <Stack spacing={5} p={5} bgcolor='background.secondary' borderRadius={8}>
      <Typography variant="section-headline">
        {'Selected currency: '}
        <Typography variant="section-headline" color="primary.main">
          {guessedCurrency}
        </Typography>
      </Typography>
      <Stack spacing={2.5} alignItems="center">
        <Typography textAlign="center">
          Based on your location, we assume
          <br /> your currency is {getCurrencyName(guessedCurrency)}, is it
          correct?
        </Typography>
        <GradientButton onClick={handleAcceptGuess}>Yes! 👌</GradientButton>
      </Stack>
      <Stack spacing={2.5} alignItems="center">
        <Typography>If not, select one from the list below 😉</Typography>
        <CurrencySelect isFrom placeholder={guessedCurrency} />
      </Stack>
    </Stack>
  );
};

export default WelcomeBanner;
