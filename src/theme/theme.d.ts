/* eslint-disable no-unused-vars */
import { PaletteColor, PaletteColorOptions } from '@mui/material';
import React from 'react';

declare module '@mui/material' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
  }
  interface Theme {
    appDrawer: {
      width: React.CSSProperties['width'];
      breakpoint: BreakpointOverrides;
    };
  }
  interface ThemeOptions {
    appDrawer?: {
      width?: React.CSSProperties['width'];
      breakpoint?: BreakpointOverrides;
    };
  }

  interface TypeText {
    dark: string;
  }

  interface TypeBackground {
    secondary: string;
  }

  interface Palette {
    accent?: PaletteColor;
  }

  interface PaletteOptions {
    accent?: PaletteColorOptions;
  }

  interface TypographyVariants {
    headline: React.CSSProperties;
    logo: React.CSSProperties;
    'section-headline': React.CSSProperties;
    'footer-info': React.CSSProperties;
    'table-heading': React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    headline?: React.CSSProperties;
    logo?: React.CSSProperties;
    'section-headline'?: React.CSSProperties;
    'footer-info'?: React.CSSProperties;
    'table-heading'?: React.CSSProperties;
  }

  interface TypographyPropsVariantOverrides {
    headline: true;
    logo: true;
    'section-headline': true;
    'footer-info': true;
    'table-heading': true;
  }
}
