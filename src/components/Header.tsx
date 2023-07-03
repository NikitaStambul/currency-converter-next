import React from 'react';
import { Box, Container, IconButton, Stack } from '@mui/material';
import Logo from './Logo';
import NavLink from './NavLink';
import menuIcon from '@/assets/menu.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <Box boxShadow={1}>
      <Container maxWidth="tablet">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height={60}
          gap={2}
        >
          <Logo />
          <Stack
            direction="row"
            height="100%"
            alignItems="center"
            display={{ mobile: 'none', tablet: 'flex' }}
          >
            <NavLink href="/currencies">Currencies</NavLink>
            <NavLink href="/converter">Converter</NavLink>
          </Stack>
          <IconButton sx={{ display: { mobile: 'flex', tablet: 'none' } }}>
            <Image src={menuIcon} alt="menu" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
