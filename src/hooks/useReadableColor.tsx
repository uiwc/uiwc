import { readableColor } from 'polished';
import { useCallback } from 'react';

/**
 * Returns black or white (or optional passed colors) for best contrast depending on the luminosity of the given color. When passing custom return colors, strict mode ensures that the return color always meets or exceeds WCAG level AA or greater. If this test fails, the default return color (black or white) is returned in place of the custom return color. You can optionally turn off strict mode.
 * @returns function
 */
export function useReadableColor() {
  return useCallback((color: string) => readableColor(color), []);
}
