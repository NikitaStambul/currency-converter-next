import React from 'react';
import './globals.css';
import Providers from './providers';

export const metadata = {
  title: 'Currency converter | Home',
  description: 'Convert any currencies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
