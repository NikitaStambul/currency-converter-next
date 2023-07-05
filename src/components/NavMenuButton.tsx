import React from 'react';
import { Drawer, IconButton } from '@mui/material';
import menuIcon from '@/assets/menu.svg';
import Image from 'next/image';
import NavMenu from './NavMenu';

const NavMenuButton = () => {
  const [opened, setOpened] = React.useState(false);

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpened((state) => !state);
    };

  return (
    <>
      <IconButton
        onClick={toggleDrawer()}
        onKeyDown={toggleDrawer()}
        sx={{ display: { mobile: 'flex', tablet: 'none' } }}
      >
        <Image src={menuIcon} alt="menu" />
      </IconButton>
      <Drawer anchor="right" open={opened} onClose={toggleDrawer()}>
        <NavMenu />
      </Drawer>
    </>
  );
};

export default NavMenuButton;
