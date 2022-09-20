import { useCallback } from 'react';
import { ColorNames } from '../styles/colors';
import useTheme from './useTheme';

/**
 * Uses the theme context and returns a method to get all color variants
 * @returns a function to get the color variant the user wants
 */
export function useColor() {
  const theme = useTheme();

  return useCallback((variant?: ColorNames) => theme.getColor(variant), [
    theme,
  ]);
}
