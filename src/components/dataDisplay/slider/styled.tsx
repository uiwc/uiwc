import styled from 'styled-components';
import { SliderProps } from './constants';

export const SliderWrapperStyled = styled.div<SliderProps>`
  .slick-slider {
    display: grid;
    grid-template-columns: ${({ arrows }) =>
      arrows ? 'auto auto auto' : 'auto'};
    grid-auto-rows: 1fr auto;
    align-items: center;
    position: relative;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;

    .slick-track,
    .slick-list {
      transform: translate3d(0, 0, 0);
      display: flex;
    }
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;

    &:focus {
      outline: none;
    }

    &.dragging {
      cursor: pointer;
      cursor: hand;
    }
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;

    &:before,
    &:after {
      display: table;
      content: '';
    }

    &:after {
      clear: both;
    }
  }

  .slick-slide {
    display: none;
    height: 100%;
    min-height: 1px;
    position: relative;

    > div {
      display: flex;
      position: relative;
      height: 100%;
    }

    &.slick-loading img {
      display: none;
    }

    &.dragging img {
      pointer-events: none;
    }
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    padding: 0;
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.getColor('primary')};
    z-index: 2;

    &:hover,
    &:focus {
      outline: none;
      background-color: ${({ theme }) => theme.getColor('brand')};

      &:before {
        opacity: 1;
      }
    }

    &.slick-disabled {
      pointer-events: none;
      background-color: ${({ theme }) => theme.getColor('light')};

      ${({ autoHideArrows }) => {
        return autoHideArrows ? 'display: none !important;' : '';
      }}

      &:before {
        /* opacity: 0.25; */
      }
    }

    &:before {
      opacity: 0.75;
    }
  }

  .slick-prev {
    margin-right: 5px;

    &:before {
      content: url('data:image/svg+xml;base64,PHN2Zw0KICB3aWR0aD0nMS41ZW0nDQogIGhlaWdodD0nMS41ZW0nDQogIHZpZXdCb3g9JzAgMCAyNCAyNCcNCiAgZmlsbD0nbm9uZScNCiAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4NCiAgPHBhdGgNCiAgICBkPSdNMTcgNS45MDNMMTUuMDk3IDQgNyAxMi4wOTdsOC4wOTcgOC4wOTdMMTcgMTguMjkybC02LjE4LTYuMTk1TDE3IDUuOTAzeicNCiAgICBmaWxsPScjZmZmJw0KICAvPg0KPC9zdmc+DQo=');
    }
  }

  .slick-next {
    margin-left: 5px;

    &:before {
      content: url('data:image/svg+xml;base64,PHN2Zw0KICB3aWR0aD0nMS41ZW0nDQogIGhlaWdodD0nMS41ZW0nDQogIHZpZXdCb3g9JzAgMCAyNCAyNCcNCiAgZmlsbD0nbm9uZScNCiAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4NCiAgPHBhdGgNCiAgICBkPSdNOC45MDMgNEw3IDUuOTAzbDYuMTggNi4xOTRMNyAxOC4yOTFsMS45MDMgMS45MDNMMTcgMTIuMDk3IDguOTAzIDR6Jw0KICAgIGZpbGw9JyNmZmYnDQogIC8+DQo8L3N2Zz4NCg==');
    }
  }

  /* Dots */
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    width: 100%;
    padding: 0;
    margin: 0;
    margin-top: ${({ theme }) => theme.getSpacer(3)};
    list-style: none;
    text-align: center;
    flex-basis: 100%;
    grid-column: ${({ arrows }) => {
      return arrows ? '1 / span 3' : '1';
    }};

    ${({ responsive = [] }) => {
      return responsive
        .sort((a: any, b: any) => a.breakpoint - b.breakpoint)
        .map((item: any, index: number) => {
          const min = index === 0 ? 0 : responsive[index - 1].breakpoint + 1;
          const max = item.breakpoint;

          const rule = `@media (min-width: ${min}px) and (max-width: ${max}px) {
            grid-column: ${item?.settings?.arrows ? '1 / span 3' : '1'};
          }`;

          return rule;
        })
        .join(' ');
    }}

    li {
      position: relative;
      display: inline-block;
      width: 20px;
      height: 20px;
      margin: 0 5px;
      padding: 0;
      cursor: pointer;

      button {
        font-size: 0;
        line-height: 0;
        display: block;
        width: 20px;
        height: 20px;
        padding: 5px;
        cursor: pointer;
        color: transparent;
        border: 0;
        outline: none;
        background: transparent;

        &:hover,
        &:focus {
          outline: none;

          &:before {
            opacity: 1;
          }
        }

        &:before {
          font-size: 40px;
          line-height: 20px;
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          content: '•';
          text-align: center;
          opacity: 0.25;
          color: ${({ theme }) => theme.getColor('primary')};
        }
      }

      &.slick-active button:before {
        opacity: 0.75;
        color: ${({ theme }) => theme.getColor('primary')};
      }
    }
  }
`;
