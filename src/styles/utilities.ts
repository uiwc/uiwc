import { Utils } from '../utils';
import { ColorNames, colors } from './colors';
import { fontSizes } from './fontSizes';
import { grid } from './grid';
import { percentages } from './percentages';
import { spacers } from './spacers';

const map = (array: any[], convert = (value: any) => value) => {
  return array.map((value: any, index: number) => ({
    [index]: convert(value),
  }));
};

const getClassName = (className: string | null, key: any, suffix = '') => {
  const c = className !== null ? className : '';
  const s = suffix ? suffix : '';

  if (c === '' && s === '') {
    return `.${key}`;
  }
  if (c === '' && s !== '') {
    return `.${key}-${s}`;
  }
  if (c !== '' && s === '') {
    return key !== '' ? `.${c}-${key}` : `.${c}`;
  }
  if (c !== '' && s !== '') {
    return `.${c}-${s}-${key}`;
  }
};

const getProperties = ({
  values = [],
  auto = false,
  properties = [],
  className = '',
  unit = null,
  suffix = '',
}: any) => {
  let result = '';

  values.forEach((value: any) => {
    if (Utils.isObject(value)) {
      const [key] = Object.entries(value)[0];
      result += `
        ${getClassName(className, key, suffix)} {
          ${properties
            .map(
              (property: string) =>
                `${property}: ${value[key]}${unit} !important;`
            )
            .join(' ')}
        }`;
    } else {
      result += `
        ${getClassName(className, value, suffix)} {
          ${properties
            .map(
              (property: string) => `${property}: ${value}${unit} !important;`
            )
            .join(' ')}
        }`;
    }
  });

  if (auto) {
    result += `
      ${getClassName(className, 'auto', suffix)} {
        ${properties
          .map((property: string) => `${property}: auto !important;`)
          .join(' ')}
      }`;
  }

  return result;
};

const getUtility = (util: any) => {
  const utility = {
    ...{
      responsive: false,
      values: [],
      unit: null,
      auto: false,
    },
    ...util,
  };
  let result = '';

  const unit = utility.unit !== null ? utility.unit : '';
  const properties = Array.isArray(utility.property)
    ? utility.property
    : [utility.property];
  const values = utility.values;

  // xs utilities
  result += getProperties({
    values,
    auto: utility.auto,
    properties,
    unit,
    className: utility.class,
  });

  // responsive utilities
  if (utility.responsive && grid.breakpoints && grid.breakpointsClasses) {
    grid.breakpoints.forEach((breakpoint: number, index: number) => {
      const suffix = grid.breakpointsClasses[index];

      result += `@media (min-width: ${breakpoint}px) {
        ${getProperties({
          values,
          auto: utility.auto,
          properties,
          unit,
          className: utility.class,
          suffix,
        })}
      }`;
    });
  }

  return result;
};

export const utilities = {
  align: {
    property: 'vertical-align',
    class: 'align',
    values: ['baseline', 'top', 'middle', 'bottom', 'text-bottom', 'text-top'],
  },
  cursor: {
    property: 'cursor',
    class: 'cursor',
    values: [
      'auto',
      'none',
      'help',
      'pointer',
      'progress',
      'wait',
      'text',
      'crosshair',
      'move',
      'not-allowed',
    ],
  },
  float: {
    responsive: true,
    property: 'float',
    class: 'float',
    values: ['left', 'right', 'none'],
  },
  overflow: {
    property: 'overflow',
    class: 'overflow',
    values: ['auto', 'hidden', 'visible', 'scroll'],
  },
  overflowX: {
    property: 'overflow-x',
    class: 'overflow-x',
    values: ['auto', 'hidden', 'visible', 'scroll'],
  },
  overflowY: {
    property: 'overflow-y',
    class: 'overflow-y',
    values: ['auto', 'hidden', 'visible', 'scroll'],
  },
  display: {
    responsive: true,
    property: 'display',
    class: 'd',
    values: [
      'inline',
      'inline-block',
      'block',
      'grid',
      'table',
      'table-row',
      'table-cell',
      'flex',
      'inline-flex',
      'none',
    ],
  },
  position: {
    property: 'position',
    class: 'position',
    values: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
  },
  top: {
    property: 'top',
    class: 'top',
    values: percentages,
    unit: '%',
  },
  bottom: {
    property: 'bottom',
    class: 'bottom',
    values: percentages,
    unit: '%',
  },
  left: {
    property: 'left',
    class: 'left',
    values: percentages,
    unit: '%',
  },
  right: {
    property: 'right',
    class: 'right',
    values: percentages,
    unit: '%',
  },
  translateMiddle: {
    property: 'transform',
    class: 'translate-middle',
    values: [
      { '': 'translate(-50%, -50%)' },
      { x: 'translateX(-50%)' },
      { y: 'translateY(-50%)' },
    ],
  },
  border: {
    property: 'border',
    class: 'border',
    values: [{ 0: 0 }, { '': `solid 1px ${colors.light}` }],
  },
  borderTop: {
    property: 'border-top',
    class: 'border-top',
    values: [{ 0: 0 }, { '': `solid 1px ${colors.light}` }],
  },
  borderRight: {
    property: 'border-right',
    class: 'border-right',
    values: [{ 0: 0 }, { '': `solid 1px ${colors.light}` }],
  },
  borderBottom: {
    property: 'border-bottom',
    class: 'border-bottom',
    values: [{ 0: 0 }, { '': `solid 1px ${colors.light}` }],
  },
  borderLeft: {
    property: 'border-left',
    class: 'border-left',
    values: [{ 0: 0 }, { '': `solid 1px ${colors.light}` }],
  },
  borderColor: {
    property: 'border-color',
    class: 'border',
    values: Object.keys(colors).map((key: string) => ({
      [key]: colors[key as ColorNames],
    })),
  },
  width: {
    responsive: true,
    property: 'width',
    class: 'w',
    values: percentages,
    unit: '%',
    auto: true,
  },
  maxWidth: {
    property: 'max-width',
    class: 'maxw',
    values: percentages,
    unit: '%',
  },
  minWidth: {
    property: 'min-width',
    class: 'minw',
    values: percentages,
    unit: '%',
  },
  viewportWidth: {
    property: 'width',
    class: 'vw',
    values: percentages,
    unit: 'vw',
  },
  height: {
    responsive: true,
    property: 'height',
    class: 'h',
    values: percentages,
    unit: '%',
    auto: true,
  },
  maxHeight: {
    property: 'max-height',
    class: 'maxh',
    values: percentages,
    unit: '%',
  },
  minHeight: {
    property: 'min-height',
    class: 'minh',
    values: percentages,
    unit: '%',
  },
  viewportHeight: {
    property: 'height',
    class: 'vh',
    values: percentages,
    unit: 'vh',
  },
  flex: {
    responsive: true,
    property: 'flex',
    class: 'flex',
    values: [{ fill: '1 1 auto' }],
  },
  flexDirection: {
    responsive: true,
    property: 'flex-direction',
    class: 'flex',
    values: ['row', 'column', 'row-reverse', 'column-reverse'],
  },
  flexGrow: {
    responsive: true,
    property: 'flex-grow',
    class: 'flex',
    values: [{ 'grow-0': 0 }, { 'grow-1': 1 }],
  },
  flexShrink: {
    responsive: true,
    property: 'flex-shrink',
    class: 'flex',
    values: [{ 'shrink-0': 0 }, { 'shrink-1': 1 }],
  },
  flexWrap: {
    responsive: true,
    property: 'flex-wrap',
    class: 'flex',
    values: ['wrap', 'nowrap', 'wrap-reverse'],
  },
  justifyContent: {
    responsive: true,
    property: 'justify-content',
    class: 'justify-content',
    values: [
      { start: 'flex-start' },
      { end: 'flex-end' },
      { center: 'center' },
      { between: 'space-between' },
      { around: 'space-around' },
      { evenly: 'space-evenly' },
    ],
  },
  alignItems: {
    responsive: true,
    property: 'align-items',
    class: 'align-items',
    values: [
      { start: 'flex-start' },
      { end: 'flex-end' },
      { center: 'center' },
      { baseline: 'baseline' },
      { stretch: 'stretch' },
    ],
  },
  alignContent: {
    responsive: true,
    property: 'align-content',
    class: 'align-content',
    values: [
      { start: 'flex-start' },
      { end: 'flex-end' },
      { center: 'center' },
      { between: 'space-between' },
      { around: 'space-around' },
      { stretch: 'stretch' },
    ],
  },
  alignSelf: {
    responsive: true,
    property: 'align-self',
    class: 'align-self',
    values: [
      { auto: 'auto' },
      { start: 'flex-start' },
      { end: 'flex-end' },
      { center: 'center' },
      { baseline: 'baseline' },
      { stretch: 'stretch' },
    ],
  },
  order: {
    responsive: true,
    property: 'order',
    class: 'order',
    values: [
      { first: -1 },
      { 0: 0 },
      { 1: 1 },
      { 2: 2 },
      { 3: 3 },
      { 4: 4 },
      { 5: 5 },
      { last: 6 },
    ],
  },
  margin: {
    responsive: true,
    property: 'margin',
    class: 'm',
    values: map(spacers),
    unit: 'rem',
    auto: true,
  },
  marginX: {
    responsive: true,
    property: ['margin-left', 'margin-right'],
    class: 'mx',
    values: map(spacers),
    unit: 'rem',
    auto: true,
  },
  marginY: {
    responsive: true,
    property: ['margin-top', 'margin-bottom'],
    class: 'my',
    values: map(spacers),
    unit: 'rem',
    auto: true,
  },
  marginTop: {
    responsive: true,
    property: 'margin-top',
    class: 'mt',
    values: map(spacers),
    unit: 'rem',
    auto: true,
  },
  marginBottom: {
    responsive: true,
    property: 'margin-bottom',
    class: 'mb',
    values: map(spacers),
    unit: 'rem',
    auto: true,
  },
  marginLeft: {
    responsive: true,
    property: 'margin-left',
    class: 'ml',
    values: map(spacers),
    unit: 'rem',
    auto: true,
  },
  marginRight: {
    responsive: true,
    property: 'margin-right',
    class: 'mr',
    values: map(spacers),
    unit: 'rem',
    auto: true,
  },
  padding: {
    responsive: true,
    property: 'padding',
    class: 'p',
    values: map(spacers),
    unit: 'rem',
    auto: true,
  },
  paddingX: {
    responsive: true,
    property: ['padding-left', 'padding-right'],
    class: 'px',
    values: map(spacers),
    unit: 'rem',
    auto: true,
  },
  paddingY: {
    responsive: true,
    property: ['padding-top', 'padding-bottom'],
    class: 'py',
    values: map(spacers),
    unit: 'rem',
    auto: true,
  },
  paddingTop: {
    responsive: true,
    property: 'padding-top',
    class: 'pt',
    values: map(spacers),
    unit: 'rem',
    auto: true,
  },
  paddingBottom: {
    responsive: true,
    property: 'padding-bottom',
    class: 'pb',
    values: map(spacers),
    unit: 'rem',
    auto: true,
  },
  paddingLeft: {
    responsive: true,
    property: 'padding-left',
    class: 'pl',
    values: map(spacers),
    unit: 'rem',
    auto: true,
  },
  paddingRight: {
    responsive: true,
    property: 'padding-right',
    class: 'pr',
    values: map(spacers),
    unit: 'rem',
    auto: true,
  },
  fontSize: {
    responsive: true,
    property: 'font-size',
    class: 'fs',
    values: [
      ...map(fontSizes),
      {
        small: '80%',
      },
      {
        xsmall: '60%',
      },
    ],
  },
  fontStyle: {
    property: 'font-style',
    class: 'fs',
    values: ['italic', 'normal'],
  },
  fontWeight: {
    property: 'font-weight',
    class: 'fw',
    values: ['lighter', 'normal', 'bold', 'bolder', 400, 500],
  },
  textAlign: {
    responsive: true,
    property: 'text-align',
    class: 'text',
    values: ['left', 'center', 'right', 'justify'],
  },
  textDecoration: {
    property: 'text-decoration',
    class: 'text-decoration',
    values: ['none', 'underline', 'line-through'],
  },
  textTransform: {
    property: 'text-transform',
    class: 'text',
    values: ['lowercase', 'uppercase', 'capitalize'],
  },
  whiteSpace: {
    property: 'white-space',
    class: 'text',
    values: [{ wrap: 'normal' }, { nowrap: 'nowrap' }],
  },
  wordWrap: {
    property: ['word-wrap', 'word-break'],
    class: 'text',
    values: [{ break: 'break-word' }],
  },
  color: {
    property: 'color',
    class: 'text',
    values: Object.keys(colors).map((key: string) => ({
      [key]: colors[key as ColorNames],
    })),
  },
  textReset: {
    property: 'color',
    class: 'text',
    values: [{ reset: 'inherit' }],
  },
  backgroundColor: {
    property: 'background-color',
    class: 'bg',
    values: Object.keys(colors).map((key: string) => ({
      [key]: colors[key as ColorNames],
    })),
  },
  userSelect: {
    property: 'user-select',
    class: 'user-select',
    values: ['all', 'auto', 'none'],
  },
  pointerEvents: {
    property: 'pointer-events',
    class: 'pe',
    values: ['none', 'auto'],
  },
  visibility: {
    responsive: true,
    property: 'visibility',
    class: null,
    values: [
      { visible: 'visible' },
      { invisible: 'hidden' },
      { hidden: 'hidden' },
    ],
  },
  rounded: {
    property: 'border-radius',
    class: 'rounded',
    values: [
      { '': '0.25rem' },
      { 0: 0 },
      { 1: '0.2rem' },
      { 2: '0.25rem' },
      { 3: '0.3rem' },
      { circle: '50%' },
      { pill: '50rem' },
    ],
  },
  roundedTop: {
    property: ['border-top-left-radius', 'border-top-right-radius'],
    class: 'rounded-top',
    values: [
      { '': '0.25rem' },
      { 0: 0 },
      { 1: '0.2rem' },
      { 2: '0.25rem' },
      { 3: '0.3rem' },
      { circle: '50%' },
      { pill: '50rem' },
    ],
  },
  roundedRight: {
    property: ['border-top-right-radius', 'border-bottom-right-radius'],
    class: 'rounded-right',
    values: [
      { '': '0.25rem' },
      { 0: 0 },
      { 1: '0.2rem' },
      { 2: '0.25rem' },
      { 3: '0.3rem' },
      { circle: '50%' },
      { pill: '50rem' },
    ],
  },
  roundedBottom: {
    property: ['border-bottom-right-radius', 'border-bottom-left-radius'],
    class: 'rounded-bottom',
    values: [
      { '': '0.25rem' },
      { 0: 0 },
      { 1: '0.2rem' },
      { 2: '0.25rem' },
      { 3: '0.3rem' },
      { circle: '50%' },
      { pill: '50rem' },
    ],
  },
  roundedLeft: {
    property: ['border-bottom-left-radius', 'border-top-left-radius'],
    class: 'rounded-left',
    values: [
      { '': '0.25rem' },
      { 0: 0 },
      { 1: '0.2rem' },
      { 2: '0.25rem' },
      { 3: '0.3rem' },
      { circle: '50%' },
      { pill: '50rem' },
    ],
  },
};

export const makeUtilities = () => {
  return `
    ${Object.values(utilities)
      .map((value: any) => getUtility(value))
      .join(' ')}
  `;
};
