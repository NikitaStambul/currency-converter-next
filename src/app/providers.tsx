import React from 'react';
import StoreProvider from '@/store/StoreProvider';
import ThemeRegistry from '@/theme/ThemeRegistry';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <ThemeRegistry>{children}</ThemeRegistry>
    </StoreProvider>
  );
};

export default Providers;
