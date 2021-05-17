import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './global/styles/global';
import theme from './global/theme';
import CheckoutPage from './pages/Checkout';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CheckoutPage />
    </ThemeProvider>
  );
};

export default App;
