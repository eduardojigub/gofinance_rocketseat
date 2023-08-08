import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import theme from './src/theme';
import Dashboard from './src/pages/Dashboard';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Dashboard /> : <Loading />}
    </ThemeProvider>
  );
}
