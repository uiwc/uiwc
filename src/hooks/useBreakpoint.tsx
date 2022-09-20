import { useCallback } from 'react';
import useTheme from './useTheme';

/**
 * Uses the theme context and returns a method to get all breakpoint values
 * @returns a function
 */
export function useBreakpoint() {
  const theme = useTheme();

  return useCallback(
    (size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'sm', withUnit = false) =>
      theme.getBreakpoint(size, withUnit),
    [theme]
  );
}
