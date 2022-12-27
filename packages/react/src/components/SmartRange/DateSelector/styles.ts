import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

import { theme } from '../../../styles';
import { container } from '../styles';
import { Colors, Corners } from '../types';

interface ContainerProps {
  colors: Colors;
  corners: Corners;
  isFocused: boolean;
}

const variants = () => ({
  corners: {
    square: css`
      border-radius: 0;
    `,
    rounded: css`
      border-radius: ${theme.radii.sm};
    `,
    round: css`
      border-radius: ${theme.radii.full};
    `,
  },
});

export const Container = styled.div<ContainerProps>`
  ${({ colors, corners, isFocused }) => css`
    border: 1px solid ${colors.primary};

    ${variants().corners[corners]};

    background: ${colors.background};
    box-shadow: 0 0 24px ${colors.background};

    color: ${container.getContrastColor(colors)};

    margin-top: ${isFocused ? '0px' : '-8px'};

    position: absolute;
    top: calc(100% + 8px);
    left: 0;

    display: grid;
    grid-template-areas:
      'filterOptions calendarOptions'
      'actions actions';

    opacity: ${isFocused ? 1 : 0};
    visibility: ${isFocused ? 'visible' : 'hidden'};

    transition: all 0.2s;
  `}
`;

export const Actions = styled.div<Pick<ContainerProps, 'colors'>>`
  ${({ colors }) => css`
    border-top: 1px solid ${transparentize(0.6, colors.primary)};
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;

    padding: ${theme.space[3]};

    grid-area: actions;
  `}
`;

/**
 * FilterOptionsStyles
 */
interface SwitcherProps extends Pick<ContainerProps, 'colors'> {
  isActive: boolean;
  staticColor?: boolean;
}

export const FilterOptionsStyles = {
  Container: styled.div<Pick<ContainerProps, 'colors'>>`
    ${({ colors }) => css`
      border-right: 1px solid ${transparentize(0.6, colors.primary)};
      border-top-left-radius: inherit;
      background: inherit;

      grid-area: filterOptions;

      display: flex;
      flex-direction: column;
    `}
  `,
  FilterOption: styled.button<Pick<ContainerProps, 'colors'>>`
    ${({ colors }) => css`
      border: none;
      border-top-left-radius: inherit;
      background: transparent;

      color: ${container.getContrastColor(colors)};
      font-size: ${theme.fontSizes.sm};
      white-space: nowrap;

      padding: ${theme.space[3]};

      gap: 8px;
      flex: 1;
      display: flex;
      align-items: center;

      cursor: pointer;

      transition: all 0.2s;

      &:hover {
        background: ${transparentize(0.8, colors.primary)};
      }

      & + button {
        border-top-left-radius: 0;
      }
    `}
  `,
  FilterOptionArrow: styled.div<Pick<ContainerProps, 'colors'>>`
    ${({ colors }) => css`
      width: 0;
      height: 0;

      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 9px solid ${colors.primary};

      pointer-events: none;

      cursor: pointer;

      transform: rotate(90deg);
    `}
  `,
  Comparer: styled.div<Pick<ContainerProps, 'colors'>>`
    ${({ colors }) => css`
      border-top: 1px solid ${transparentize(0.6, colors.primary)};

      color: ${theme.colors.white};
      font-size: 14px;
      font-weight: normal;

      padding: ${theme.space[3]};

      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
  `,
  Switcher: styled.div<SwitcherProps>`
    ${({ colors, isActive }) => css`
      width: 32px;
      height: 10px;

      border-radius: 16px;
      background: ${isActive
        ? transparentize(0.8, colors.primary)
        : transparentize(0.8, theme.colors.white)};

      margin: 4px 0;

      position: relative;

      display: flex;
      align-items: center;

      cursor: pointer;

      transition: all 400ms;

      input {
        display: none;
      }
    `}
  `,
  SwitcherBall: styled.div<SwitcherProps>`
    ${({ colors, isActive, staticColor }) => css`
      width: 14px;
      height: 14px;

      border-radius: 100%;
      background: ${isActive ? colors.primary : theme.colors.white};

      position: absolute;
      left: ${isActive ? '22px' : '0px'};

      transition: all 400ms;

      ${staticColor &&
      css`
        background: ${theme.colors.white};
      `}
    `}
  `,
};

/**
 * CalendarOptionsStyles
 */
export const CalendarOptionsStyles = {
  Container: styled.div<Pick<ContainerProps, 'colors'>>`
    ${({ colors }) => css`
      border-right: 1px solid ${transparentize(0.8, colors.primary)};
      border-top-right-radius: inherit;
      background: inherit;

      padding: ${theme.space[3]};

      grid-area: calendarOptions;
    `}
  `,
};
