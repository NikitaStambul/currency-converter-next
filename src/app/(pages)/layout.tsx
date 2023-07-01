import React from 'react';
import MainContainer from '@/components/MainContainer';

export const metadata = {
  title: 'Currency converter | Home',
  description: 'Convert any currencies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainContainer>{children}</MainContainer>;
}
