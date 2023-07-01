'use client';

import React from 'react';
import chevronIcon from '../../assets/arrow-down.svg';
import { Autocomplete } from '@mui/material';
import { styled } from '@mui/material';
import { currencies } from '../constants/currencies';
import Image from 'next/image';

const CustomInput = styled('input')(({ theme }) => ({
  position: 'relative',
  color: theme.palette.text.secondary,
  fontSize: 'inherit',
  outline: 'none',
  border: 'none',
  fontWeight: 600,
  width: 60,
}));

const InputContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledChevron = styled(Image)(({ theme }) => ({
  stroke: theme.palette.text.secondary,
}));

const NewSelect = ({
  value,
}: {
  value?: string;
  onSelect: () => void;
}) => {
  return (
    <Autocomplete
      options={currencies.map((cur) => cur.abbreviation)}
      value={value}
      renderInput={(params) => (
        <InputContainer ref={params.InputProps.ref}>
          <CustomInput type="text" {...params.inputProps} />
          <StyledChevron src={chevronIcon} alt='chevron icon' />
        </InputContainer>
      )}
    />
  );
};

export default NewSelect;
