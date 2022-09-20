import { i18n } from '../../../i18n/language';
import styled from 'styled-components';

export const TableWrapperStyled = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
  position: relative;

  &.loading {
    overflow: hidden;

    &:after {
      content: '${() => i18n('ui.commons.loading')}';
      display: grid;
      place-items: center;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(1.5px);
      z-index: 1;
    }
  }

  &.without-header {
    tbody {
      tr:first-child {
        border-top: 1px solid #e5e5e5;
      }
    }
  }
`;

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background-color: ${({ theme }) => theme.getColor('powderer')};
    font-weight: 500;
    /* border-top: 1px solid #e5e5e5; */
    /* border-bottom: 1px solid #e5e5e5; */

    svg {
      font-size: 0.75em;
      margin-left: ${({ theme }) => theme.getSpacer(2)};
      margin-top: -3px;
    }
  }

  td,
  th {
    border-bottom: 1px solid #e5e5e5;
    min-height: 60px;
    padding: 18px 10px;
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */

    /* The secret sauce */
    /* Each cell should grow equally */
    width: 1%;
    /* But "collapsed" cells should be as small as possible */
    &.collapse {
      width: 0.0000000001%;
    }

    .aggregated {
      margin-bottom: ${({ theme }) => theme.getSpacer(3)};

      &:last-child {
        margin-bottom: 0;
      }
    }

    ${({ theme }) => theme.getMediaQuery('md')} {
      white-space: nowrap;
    }
  }

  th {
    border: none;
  }

  tbody {
    tr {
      &.clickable {
        cursor: pointer;
      }

      &.active {
        background-color: ${({ theme }) => theme.getColor('platinium')};

        &:hover {
          /* background-color: #dadddd; */
          background-color: ${({ theme }) => theme.getColor('powder')};
        }
      }

      &:hover {
        background-color: #f8f9fa;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
        z-index: 1;
      }
    }
  }
`;
