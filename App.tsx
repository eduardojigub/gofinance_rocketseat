import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import Dashboard from './src/pages/Dashboard';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
