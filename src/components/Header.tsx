import React from 'react';
import { Box, Container, Stack } from '@mui/material';
import Logo from './Logo';
import NavLink from './NavLink';
import NavMenu from './NavMenuButton';


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
          <NavMenu />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
