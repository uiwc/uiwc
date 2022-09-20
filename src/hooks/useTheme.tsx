import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export default function useTheme() {
  const theme = useContext(ThemeContext);

  if (theme === undefined) {
    throw new Error('"useTheme" must be used within a ThemeProvider');
  }

  console.info('Current theme: ', theme);

  return theme;
}
