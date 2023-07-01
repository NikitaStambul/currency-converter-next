'use client';

import React from 'react';
import { Stack, Typography, styled } from '@mui/material';
import CurrencySelect from './CurrencySelect';
import { useAppSelector } from '../store/hooks';
import CurrencyInput from './CurrencyInput';

const Main = styled(Stack)(() => ({
  padding: '12px 32px',
  background: '#ffffff',
  borderRadius: 16,
  gap: 8,
}));

const BlueAccent = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const ConverterCard = ({ isFrom = false }: { isFrom?: boolean }) => {
  const { fromCurrency, toCurrency } = useAppSelector(
    (state) => state.currencyState,
  );
  const { exchangeRates } = useAppSelector((state) => state.exchangeState);

  const exchangeRate = (() => {
    if (!fromCurrency || !toCurrency) {
      return 1;
    }

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    return toRate / fromRate;
  })();

  return (
    <Main>
      <Stack direction="row" justifyContent="space-between" alignItems="end">
        <Typography fontWeight={600}>{isFrom ? 'From' : 'To'}:</Typography>
        <CurrencySelect isFrom={isFrom} />
      </Stack>
      <Stack gap={1}>
        <CurrencyInput isFrom={isFrom} />
        {isFrom ? (
          <Typography color="text.secondary" fontSize={12}>
            {`1 ${fromCurrency} = `}
            <BlueAccent>{exchangeRate.toFixed(3)}</BlueAccent>
            {` ${toCurrency}`}
          </Typography>
        ) : (
          <Typography color="text.secondary" fontSize={12}>
            {`1 ${toCurrency} = `}
            <BlueAccent>{(1 / exchangeRate).toFixed(3)}</BlueAccent>
            {` ${fromCurrency}`}
          </Typography>
        )}
      </Stack>
    </Main>
  );
};

export default ConverterCard;
