'use client';

import React from 'react';

import { Stack } from '@mui/material';
import { styled } from '@mui/material';
import Converter from '@/components/Converter';
import Prompt from '@/components/Prompt';

const Main = styled(Stack)(({ theme }) => ({
  background: theme.palette.background.secondary,
  position: 'relative',
  padding: '32px 40px',
  borderRadius: 32,
}));

const ConverterPage = () => {
  return (
    <Stack spacing={4}>
      <Prompt />
      <Main>
        <Converter />
      </Main>
    </Stack>
  );
};

export default ConverterPage;
