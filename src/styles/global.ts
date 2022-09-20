import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* @media (prefers-reduced-motion: no-preference) {
    :root {
      scroll-behavior: smooth;
    }
  } */

  body {
    margin: 0;
    font-family: ${({ theme }: any) => theme.body.fontFamily};
    font-size: ${({ theme }: any) => theme.body.fontSize};
    font-weight: ${({ theme }: any) => theme.body.fontWeight};
    line-height: ${({ theme }: any) => theme.body.lineHeight};
    color: ${({ theme }: any) => theme.body.color};
    text-align: ${({ theme }: any) => theme.body.textAlign};
    background-color: ${({ theme }: any) => theme.body.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overflow-x: hidden;
    width: 100vw;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }: any) => theme.typography.headings.fontFamily};
  }

  /**
  * Render the main element consistently in IE.
  */

  main {
    display: block;
  }

  /* Grouping content
    ========================================================================== */

  /**
  * 1. Add the correct box sizing in Firefox.
  * 2. Show the overflow in Edge and IE.
  */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
  * 1. Correct the inheritance and scaling of font size in all browsers.
  * 2. Correct the odd em font sizing in all browsers.
  */

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
    ========================================================================== */

  /**
  * Remove the gray background on active links in IE 10.
  */

  a {
    background-color: transparent;
  }

  /**
  * 1. Remove the bottom border in Chrome 57-
  * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
  */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
  * Add the correct font weight in Chrome, Edge, and Safari.
  */

  b,
  strong {
    font-weight: bolder;
  }

  /**
  * 1. Correct the inheritance and scaling of font size in all browsers.
  * 2. Correct the odd em font sizing in all browsers.
  */

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
  * Add the correct font size in all browsers.
  */

  small {
    font-size: 80%;
  }

  /**
  * Prevent sub and sup elements from affecting the line height in
  * all browsers.
  */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
    ========================================================================== */

  /**
  * Remove the border on images inside links in IE 10.
  */

  img {
    border-style: none;
  }

  /* Forms
    ========================================================================== */

  /**
  * 1. Change the font styles in all browsers.
  * 2. Remove the margin in Firefox and Safari.
  */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
  * Show the overflow in IE.
  * 1. Show the overflow in Edge.
  */

  button,
  input { /* 1 */
    overflow: visible;
  }

  /**
  * Remove the inheritance of text transform in Edge, Firefox, and IE.
  * 1. Remove the inheritance of text transform in Firefox.
  */

  button,
  select { /* 1 */
    text-transform: none;
  }

  /**
  * Correct the inability to style clickable types in iOS and Safari.
  */

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
  * Remove the inner border and padding in Firefox.
  */

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
  * Restore the focus styles unset by the previous rule.
  */

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
  * Correct the padding in Firefox.
  */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
  * 1. Correct the text wrapping in Edge and IE.
  * 2. Correct the color inheritance from fieldset elements in IE.
  * 3. Remove the padding so developers are not caught out when they zero out
  *    fieldset elements in all browsers.
  */

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /**
  * Add the correct vertical alignment in Chrome, Firefox, and Opera.
  */

  progress {
    vertical-align: baseline;
  }

  /**
  * Remove the default vertical scrollbar in IE 10+.
  */

  textarea {
    overflow: auto;
  }

  /**
  * 1. Add the correct box sizing in IE 10.
  * 2. Remove the padding in IE 10.
  */

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
  * Correct the cursor style of increment and decrement buttons in Chrome.
  */

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
  * 1. Correct the odd appearance in Chrome and Safari.
  * 2. Correct the outline style in Safari.
  */

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
  * Remove the inner padding in Chrome and Safari on macOS.
  */

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
  * 1. Correct the inability to style clickable types in iOS and Safari.
  * 2. Change font properties to inherit in Safari.
  */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /* Interactive
    ========================================================================== */

  /*
  * Add the correct display in Edge, IE 10+, and Firefox.
  */

  details {
    display: block;
  }

  /*
  * Add the correct display in all browsers.
  */

  summary {
    display: list-item;
  }

  /* Misc
    ========================================================================== */

  /**
  * Add the correct display in IE 10+.
  */

  template {
    display: none;
  }

  /**
  * Add the correct display in IE 10.
  */

  [hidden] {
    display: none;
  }

  code {
    font-family: ${({ theme }: any) => theme.typography.code.fontFamily};
    font-size: .875em;
    color: #d63384;
    word-wrap: break-word;
  }

  a, .anchor {
    color: ${({ theme }: any) => theme.typography.links.color};
    text-decoration: ${({ theme }: any) => theme.typography.links.decoration};
  }

  a:hover, .anchor:hover {
    color: ${({ theme }: any) => theme.typography.links.hover.color};
    text-decoration: ${({ theme }: any) =>
      theme.typography.links.hover.decoration};
  }

  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }

  strong,
  b {
    font-weight: 500;
  }

  p {
    margin-top: 0;
    margin-bottom: ${({ theme }: any) =>
      theme.typography.paragraph.marginBottom};
  }

  img,
  svg {
    vertical-align: middle;
  }


  /* Utilities */

  .img-fluid {
    // Part 1: Set a maximum relative to the parent
    max-width: 100%;
    // Part 2: Override the height to auto, otherwise images will be stretched
    // when setting a width and height attribute on the img element.
    height: auto;
  }

  .clearfix::after {
    display: block;
    clear: both;
    content: "";
  }

  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: ${({ theme }) => theme.getZIndex('FIXED')};
  }

  .fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${({ theme }) => theme.getZIndex('FIXED')};
  }

  .sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: ${({ theme }) => theme.getZIndex('STICKY')};
  }

  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .sample-table {
    border-collapse: collapse;
    max-width: 800px;
    min-width: 800px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    text-align: center;

    thead tr {
      background-color: ${({ theme }) => theme.getColor('primary')};
      color: #ffffff;
      text-align: left;
      text-align: center;
    }

    th,
    td {
      padding: 12px 15px;
    }

    tbody tr {
      border-bottom: 1px solid #dddddd;
      &:hover {
        background-color: darken(#f3f3f3, 5%) !important;
      }
    }

    tbody tr:nth-of-type(odd) {
      background-color: #f3f3f3;
    }

    tbody tr:last-of-type {
      border-bottom: 2px solid ${({ theme }) => theme.getColor('primary')};
    }
  }
`;
