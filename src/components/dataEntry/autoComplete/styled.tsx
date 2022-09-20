import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import styled, { css } from 'styled-components';

const BaseCss = css`
  .dw-uic-autocomplete__control {
    height: 48px;
    border-radius: 2px;
    font-size: 16px;
    outline: none;
    box-shadow: none;
    line-height: 1;
    transition: all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    border: solid 1px ${({ theme }) => theme.getColor('text')};
    padding-left: 16px;

    &:hover {
      border: solid 1px ${({ theme }) => theme.getColor('text')};
    }

    &.dw-uic-autocomplete__control--is-focused {
      border-color: ${({ theme }) => theme.getColor('primary')};
    }

    &.dw-uic-autocomplete__control--is-disabled {
      pointer-events: none;
      cursor: default;
      background-color: ${({ theme }) => theme.getColor('white')};
      color: ${({ theme }) => theme.getColor('spanish')};
      border-color: ${({ theme }) => theme.getColor('spanish')};

      .dw-uic-autocomplete__dropdown-indicator {
        color: ${({ theme }) => theme.getColor('spanish')};
      }
    }

    .dw-uic-autocomplete__placeholder {
      color: ${({ theme }) => theme.getColor('spanish')};
    }

    .dw-uic-autocomplete__value-container {
      padding-left: 0;
    }
  }

  .dw-uic-autocomplete__menu {
    z-index: ${({ theme }) => theme.getZIndex('DROPDOWN')};
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.12),
      0px 1px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    .dw-uic-autocomplete__option--is-focused {
      background-color: ${({ theme }) => theme.getColor('cultured')};
    }
    .dw-uic-autocomplete__option--is-selected {
      background-color: ${({ theme }) => theme.getColor('powder')};
      color: inherit;
    }
  }

  .dw-uic-autocomplete__indicator-separator {
    display: none;
  }

  .dw-uic-autocomplete__dropdown-indicator {
    color: ${({ theme }) => theme.getColor('primary')};
  }

  .dw-uic-autocomplete__multi-value {
    background-color: ${({ theme }) => theme.getColor('primary')};
    color: ${({ theme }) => theme.getColor('white')};

    .dw-uic-autocomplete__multi-value__label {
      color: ${({ theme }) => theme.getColor('white')};
    }

    .dw-uic-autocomplete__multi-value__remove:hover {
      background-color: ${({ theme }) => theme.getColor('brand')};
      color: ${({ theme }) => theme.getColor('white')};
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  &.is-multiple {
    .dw-uic-autocomplete__control {
      height: auto;
      min-height: 48px;
    }
  }

  &.has-error {
    .dw-uic-autocomplete__control {
      border-color: ${({ theme }) => theme.getColor('error')};
      color: ${({ theme }) => theme.getColor('error')};

      .dw-uic-autocomplete__single-value {
        color: ${({ theme }) => theme.getColor('error')};
      }

      &.dw-uic-autocomplete__control--is-focused {
        border-color: ${({ theme }) => theme.getColor('error')};
      }
    }
  }

  &.loading {
    .dw-uic-autocomplete__control {
      pointer-events: none;
      cursor: default;
      background-color: ${({ theme }) => theme.getColor('white')};
      color: ${({ theme }) => theme.getColor('spanish')};
      border-color: ${({ theme }) => theme.getColor('spanish')};

      .dw-uic-autocomplete__dropdown-indicator {
        color: ${({ theme }) => theme.getColor('spanish')};
      }
    }
  }
`;

export const AutoCompleteStyled = styled(Select)`
  ${BaseCss}
`;

export const CreatableAutoCompleteStyled = styled(CreatableSelect)`
  ${BaseCss}
`;

export const AutoCompleteWrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    color: ${({ theme }) => theme.getColor('text')};
    transform: translate(-7px, -6px) scale(0.8);
    padding: 0 10px;

    &.has-error {
      color: ${({ theme }) => theme.getColor('error')};
    }
  }

  &.focused label,
  :focus-within label {
    color: ${({ theme }) => theme.getColor('primary')};

    &.has-error {
      color: ${({ theme }) => theme.getColor('error')};
    }
  }
`;
