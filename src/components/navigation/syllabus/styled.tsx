import styled, { css } from 'styled-components';
import { CloseIcon } from '../../general/icons';
import {
  SyllabusIconProps,
  SyllabusProps,
  SyllabusTopicProps,
} from './constants';

const SyllabusCSS = css`
  h1 {
    font-size: 2.5rem;
    line-height: 3.25rem;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  h3 {
    font-size: 1.3rem;
    line-height: 1.75rem;
  }
  h4 {
    font-size: 1.15rem;
    line-height: 1.5rem;
  }
  h5 {
    font-size: 1.15rem;
    line-height: 1.5rem;
  }
`;

export const SyllabusTopicVerticalStyled = styled.div<SyllabusTopicProps>`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
`;

export const SyllabusStyled = styled.div<SyllabusProps>`
  ${({ vertical = false }) => (vertical ? SyllabusCSS : '')};
`;

export const SyllabusGoalsStyled = styled.div`
  .cursor-pointer {
    padding: 0 ${({ theme }) => theme.getSpacer(5)}
      ${({ theme }) => theme.getSpacer(3)};
  }

  ul {
    margin: 0;
  }

  div[type='button'] {
    appearance: none;
    background-color: white;
    background: white;
    border-radius: 0;
    outline: none;
    box-shadow: none;
    border: none;

    &:focus,
    &:active,
    &:hover {
      outline: none;
      box-shadow: none;
    }
  }
`;

export const SyllabusSubItemStyled = styled.div`
  display: flex;
  cursor: pointer;
  padding: ${({ theme }) => theme.getSpacer(2)}
    ${({ theme }) => theme.getSpacer(5)};

  &:hover {
    background-color: ${({ theme }) => theme.getColor('cultured')};
  }

  &.active {
    background-color: ${({ theme }) => theme.getColor('cultured')};
  }
`;

export const SyllabusIconsStyled = styled.div<SyllabusIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: ${({ theme }) => theme.getColor('primary')};
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.getSpacer(3)};
  margin-top: 8px;
  color: ${({ theme }) => theme.getColor('white')};
  font-size: 0.5rem;

  ${({ theme }) => theme.getMediaQuery('md')} {
    width: ${({ vertical = false }) => (vertical ? '28px' : '34px')};
    height: ${({ vertical = false }) => (vertical ? '28px' : '34px')};
    margin-top: ${({ vertical = false }) => (vertical ? '4px' : '6px')};
  }
`;

export const SyllabusCheckIconStyled = styled(SyllabusIconsStyled)`
  background-color: ${({ theme }) => theme.getColor('success')};
  font-size: 1.6rem;

  ${({ theme }) => theme.getMediaQuery('md')} {
    font-size: ${({ vertical = false }) => (vertical ? '1.4rem' : '1.6rem')};
  }
`;

export const SyllabusWrongIconStyled = styled(SyllabusIconsStyled)`
  background-color: ${({ theme }) => theme.getColor('error')};
  font-size: 1.6rem;

  ${({ theme }) => theme.getMediaQuery('md')} {
    font-size: ${({ vertical = false }) => (vertical ? '1.4rem' : '1.6rem')};
  }
`;

export const SyllabusTopicIconStyled = styled(SyllabusIconsStyled)`
  font-size: 1.4rem;

  ${({ theme }) => theme.getMediaQuery('md')} {
    font-size: ${({ vertical = false }) => (vertical ? '1.2rem' : '1.4rem')};
  }
`;

export const SyllabusVideoIconStyled = styled(SyllabusIconsStyled)`
  font-size: 1.4rem;

  ${({ theme }) => theme.getMediaQuery('md')} {
    font-size: ${({ vertical = false }) => (vertical ? '1.4rem' : '1.6rem')};
  }
`;

export const SyllabusLectureIconStyled = styled(SyllabusIconsStyled)`
  font-size: 1.05rem;

  ${({ theme }) => theme.getMediaQuery('md')} {
    font-size: ${({ vertical = false }) => (vertical ? '1.05rem' : '1.25rem')};
  }
`;

export const SyllabusActivityIconStyled = styled(SyllabusIconsStyled)`
  font-size: 1.2rem;

  ${({ theme }) => theme.getMediaQuery('md')} {
    font-size: ${({ vertical = false }) => (vertical ? '1.2rem' : '1.4rem')};
  }
`;

export const SyllabusFormativeEvaluationIconStyled = styled(
  SyllabusIconsStyled
)`
  font-size: 1.05rem;

  ${({ theme }) => theme.getMediaQuery('md')} {
    font-size: ${({ vertical = false }) => (vertical ? '1.05rem' : '1.25rem')};
  }
`;

export const SyllabusPisaIconStyled = styled(SyllabusIconsStyled)`
  font-size: 1.1rem;

  ${({ theme }) => theme.getMediaQuery('md')} {
    font-size: ${({ vertical = false }) => (vertical ? '1.1rem' : '1.3rem')};
  }
`;

export const SyllabusPisaTopicStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: ${({ theme }) => theme.getColor('cultured')};
  border-radius: 4px;
  padding: ${({ theme }) => theme.getSpacer(3)};

  .cs-title {
    margin-bottom: ${({ theme }) => theme.getSpacer(3)};
  }

  .cs-level {
  }
`;

export const SyllabusPisaOpportunityStyled = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.getColor('platinium')};
  border-radius: 4px;
  padding: ${({ theme }) => theme.getSpacer(3)};

  .cs-title {
    padding-right: ${({ theme }) => theme.getSpacer(3)};
    text-align: center;
    small {
      font-size: 0.75rem;
    }
  }

  .cs-level {
    border-left: 1px solid ${({ theme }) => theme.getColor('light')};
    padding-left: ${({ theme }) => theme.getSpacer(3)};
  }
`;

export const CloseButtonStyled = styled(CloseIcon)`
  color: ${({ theme }) => theme.getColor('primary')};
  position: absolute;
  right: ${({ theme }) => theme.getSpacer(3)};
  top: ${({ theme }) => theme.getSpacer(3)};
  transform: scale(1.4);
  cursor: pointer;
`;

export const SyllabusPisaClickeableStyled = styled.div`
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.getColor('light')};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.getColor('cultured')};
  }

  &.active {
    background-color: ${({ theme }) => theme.getColor('cultured')};
  }
`;
