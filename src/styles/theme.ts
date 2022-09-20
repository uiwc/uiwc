import { Configuration, setConfiguration } from 'react-grid-system';
import { Utils } from '..';
import { ColorNames, colors } from './colors';
import { fontSizes } from './fontSizes';
import { breakpoints, grid } from './grid';
import { spacers } from './spacers';
import { typography } from './typography';
import { zIndex } from './zIndex';

setConfiguration(grid as Configuration);

export const theme: any = {
  body: {
    fontSize: '16px',
    fontFamily:
      'Roboto, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    color: colors.text,
    background: colors.white,
    lineHeight: 1.5,
    fontWeight: 400,
    textAlign: 'left',
  },

  // Other
  typography,

  // Utilities (required)

  /**
   * Gets a hex color string
   * @param variant primary | brand | tertiary | secondary | text | error | light | spanish | cultured | white | powder | black | platinium | transparent | year1 | year2 | year3 | year4 | year5 | year6 | evaluation
   * @param defaultColor fallback (default: text)
   * @returns HEX color
   */
  getColor: (
    variant: ColorNames,
    opacity: number = 1,
    defaultColor = colors.text
  ) => {
    return Utils.convertHexToRGBA(colors[variant] || defaultColor, opacity);
  },
  /**
   * REM: [0:'0rem', 1:'.25rem', 2:'.5rem', 3:'1rem', 4:'1.5rem', 5:'2rem', 6:'3rem', 7:'4rem', 8:'8rem', 9:'16rem']
   * PX: [0:'0px', 1:'4px', 2:'8px', 3:'16px', 4:'24px', 5:'32px', 6:'48px', 7:'64px', 8:'128px', 9:'256px']
   * @param index 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 (default: 0)
   * @param withUnit print "rem"
   * @returns Number in rem units
   */
  getSpacer: (
    index: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 = 0,
    withUnit = true
  ) => {
    const value = spacers[index] || 0;
    return withUnit ? `${value}rem` : value;
  },
  /**
   * Gets a given media query min
   * @param size 'sm' | 'md' | 'lg' | 'xl' | 'xxl' (default: 'sm')
   * @returns A string "@media (min-width: [size]px)"
   */
  getMediaQuery(size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'sm') {
    const bp = breakpoints[size];
    return `@media (min-width: ${bp}px)`;
  },
  /**
   * Gets a given breakpoint value
   * @param size 'sm' | 'md' | 'lg' | 'xl' | 'xxl' (default: 'sm')
   * @returns A number
   */
  getBreakpoint(
    size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'sm',
    withUnit = false
  ) {
    const bp = breakpoints[size];
    return withUnit ? `${bp}px` : bp;
  },
  /**
   * Get a given font size
   * @param index 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 (default: 0)
   * @returns Number in rem units
   */
  getFontSize: (index: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 = 0) => {
    const value = fontSizes[index] || '1rem';
    return value;
  },
  /**
   * Get a given zIndex
   * @param element BACKDROP | MODAL | MODAL_CONTENT | TOOLTIP | DROPDOWN | SIDEBAR | TOAST | STICKY | FIXED | NAVBAR
   * @returns ZIndex value
   */
  getZIndex: (
    element:
      | 'ZERO'
      | 'ONE'
      | 'BACKDROP'
      | 'MODAL'
      | 'MODAL_CONTENT'
      | 'TOOLTIP'
      | 'DROPDOWN'
      | 'SIDEBAR'
      | 'STICKY'
      | 'FIXED'
      | 'TOAST'
      | 'POPOVER'
      | 'ASIDE'
      | 'NAVBAR' = 'ZERO'
  ) => {
    const value = zIndex[element] || 0;
    return value;
  },
};
