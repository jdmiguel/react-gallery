import React, { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

export const theme: DefaultTheme = {
  palette: {
    PRIMARY: '#A66885',
    PRIMARY_DARK: '#734359',
    PRIMARY_LIGHT: '#F2C1AE',
    LIGHT_MAX: '#FFFFFF',
    LIGHT_MIN: '#E5EAED',
    DARK_MAX: '#2f3235',
    DARK_MIN: '#798186',
  },
};

export const renderWithTheme = (component: ReactNode) => (
  <ThemeProvider theme={theme}>{component}</ThemeProvider>
);
