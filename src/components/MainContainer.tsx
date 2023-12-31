/* eslint-disable no-unused-vars */
'use client';

import React, { useEffect } from 'react';
import { Container, Stack } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchExchange } from '@/store/slices/exchangeSlice';
import { redirect } from 'next/navigation';
import Loader from './Loader';

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const { fromCurrency } = useAppSelector((state) => state.currencyState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchExchange());

    if (!fromCurrency) {
      redirect('/set-currency');
    }
  }, [dispatch, fromCurrency]);

  if (!fromCurrency) {
    return <Loader />;
  }

  return (
    <Stack minHeight="100dvh" justifyContent="space-between">
      <Header />
      <Container
        sx={{
          padding: '32px 0',
          marginBottom: 0,
          minHeight: { mobile: 560, tablet: 400 },
          height: 'calc(100dvh - 140px)',
        }}
        maxWidth="tablet"
      >
        {children}
      </Container>
      <Footer />
    </Stack>
  );
};

export default MainContainer;
