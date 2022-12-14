import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { theme } from './theme';
import GlobalStyles from './theme/globalStyles';

function App() {
  return (
    <ThemeProvider  theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
