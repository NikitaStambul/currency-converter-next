import { Stack } from '@mui/material';
import React from 'react';
import NavLink from './NavLink';

const NavMenu = () => {
  return (
    <Stack
      p={4}
      spacing={4}
      display={{ mobile: 'flex', tablet: 'none' }}
    >
      <NavLink href="/currencies">Currencies</NavLink>
      <NavLink href="/converter">Converter</NavLink>
    </Stack>
  );
};

export default NavMenu;
