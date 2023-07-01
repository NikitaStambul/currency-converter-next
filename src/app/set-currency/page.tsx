'use client';

import FirstCurrencySelect from '@/components/FirstCurrencySelect';
import { Stack } from '@mui/material';
import React from 'react';

const page = () => {
  return (
    <Stack minHeight="100dvh" justifyContent="space-between">
      <FirstCurrencySelect />
    </Stack>
  );
};

export default page;
