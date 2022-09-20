// The following settings can be configured, to alter the responsive behavior of the grid components
export const grid = {
  // The breakpoints (minimum width) of devices in screen class sm, md, lg, xl, and xxl.
  breakpoints: [576, 768, 992, 1200, 1600],
  // The container widths in pixels of devices in screen class sm, md, lg, xl, and xxl.
  containerWidths: [540, 740, 960, 1140, 1540],
  // Class names
  breakpointsClasses: ['sm', 'md', 'lg', 'xl', 'xxl'],
  // The gutter width in pixels. A gutter width of 30 means 15px on each side of a column.
  gutterWidth: 30,
  // The number of columns in the grid.
  gridColumns: 12,
  // The screen class used when the view port cannot be determined using window.
  defaultScreenClass: 'xxl',
  // The maximum screen class to be used.
  maxScreenClass: 'xxl',
};

// The breakpoints (minimum width) of devices in screen class sm, md, lg, xl, and xxl.
export const breakpoints = {
  sm: grid.breakpoints[0],
  md: grid.breakpoints[1],
  lg: grid.breakpoints[2],
  xl: grid.breakpoints[3],
  xxl: grid.breakpoints[4],
};
