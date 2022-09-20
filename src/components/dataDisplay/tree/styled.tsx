import styled from 'styled-components';

export const TreeStyled = styled.ol`
  transition: all 0.5s ease;

  &.collapsed {
    display: none;
  }

  &.expanded {
  }
`;

export const TreeNodeStyled = styled.li`
  &.leaf {
    padding-left: 20px;
  }

  & > ol {
    padding-left: 40px;
  }
`;

export const TreeNodeActionStyled = styled.span`
  display: inline-block;
  width: 20px;
  cursor: pointer;
`;
