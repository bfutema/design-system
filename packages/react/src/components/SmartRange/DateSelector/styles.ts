import { FixedSizeList } from 'react-window';

import { isLastDayOfMonth } from 'date-fns';
import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

import { IDate } from '../../../helpers/DateHelper';
import { theme } from '../../../styles';
import { getContrastColor } from '../../../utils';
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
    box-shadow: 0 0 24px ${colors.shadow};

    color: ${getContrastColor({ color: colors.background })};

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

    grid-area: actions;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      height: 100%;

      border: none;
      background: inherit;

      color: inherit;

      padding: ${theme.space[3]};

      cursor: pointer;

      transition: all 200ms;

      &:hover {
        background: ${transparentize(0.8, colors.primary)};
      }

      &:last-child {
        border-bottom-right-radius: 8px;
      }
    }
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
      border-top-left-radius: 0;
      background: transparent;

      color: ${getContrastColor({ color: colors.background })};
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

      &:first-child {
        border-top-left-radius: inherit;
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
interface InputsProps {
  isComparing: boolean;
  color: string;
}

interface SelectionArrowProps extends Pick<ContainerProps, 'colors'> {
  isSelecting: boolean;
}

interface MonthProps {
  monthQuantity: number;
}

export interface DayProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  key: string;
  hoverColor: string;
  index: number;
  day: IDate;
  isToday: boolean;
  isSelected: boolean;
  isHovered: boolean;
}

const dayVariations = (index: number, hoverColor: string, day: IDate) => ({
  hide: css`
    background: transparent !important;
    border-top: 0 !important;
    border-right: 0 !important;
    border-left: 0 !important;

    ${isLastDayOfMonth(day.date) &&
    css`
      border-right: 1px solid transparent !important;
    `}

    ${index > 27 &&
    css`
      border-bottom: 0 !important;
    `}

    color: transparent !important;

    &:hover {
      border-color: transparent;
      background: transparent;

      color: transparent;

      cursor: initial;
    }

    &:after,
    &:before {
      display: none !important;
    }
  `,
  today: css`
    color: #176bf8;
    font-weight: bold;
  `,
  selected: css`
    border-color: ${hoverColor};
    background: ${hoverColor};

    color: #f7f7f7;
    font-weight: bold;

    &:after {
      opacity: 1;
      visibility: visible;
    }

    &:before {
      opacity: 1;
      visibility: visible;
    }
  `,
  hovered: css`
    border-color: ${hoverColor} !important;
    background: ${transparentize(0.8, hoverColor)};

    &:after {
      opacity: 1;
      visibility: visible;
    }

    &:before {
      opacity: 1;
      visibility: visible;
    }
  `,
});

export const CalendarOptionsStyles = {
  Container: styled.div<Pick<ContainerProps, 'colors'>>`
    ${({ colors }) => css`
      border-right: 1px solid ${transparentize(0.8, colors.primary)};
      border-top-right-radius: inherit;
      background: inherit;

      grid-area: calendarOptions;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
    `}
  `,
  Options: styled.div<Pick<ContainerProps, 'colors'>>`
    ${({ colors }) => css`
      width: 100%;

      border-bottom: 1px solid ${transparentize(0.6, colors.primary)};
      border-top-right-radius: 8px;

      padding: ${theme.space[2]};

      gap: 16px;
      display: flex;
      flex-direction: column;
    `}
  `,
  Comparer: styled.div`
    gap: 8px;
    display: flex;
    flex-direction: column;
  `,
  Inputs: styled.div<InputsProps>`
    ${({ isComparing, color }) => css`
      width: 100%;

      gap: 8px;
      display: flex;
      align-items: center;

      input {
        width: 100%;
        height: 40px;

        border-radius: 4px;
        border: none;
        outline: none;
        border: 1px solid
          ${isComparing ? transparentize(0.4, color) : theme.colors.white};
        background: ${isComparing
          ? transparentize(0.4, color)
          : theme.colors.white};

        color: ${isComparing ? theme.colors.white : theme.colors.black};

        padding: 0 8px;

        cursor: pointer;

        &::-webkit-calendar-picker-indicator {
          filter: ${isComparing ? 'invert(1)' : 'initial'};

          cursor: pointer;
        }

        &:disabled {
          border: 1px solid
            ${isComparing ? transparentize(0.8, color) : theme.colors.white};
          background: ${isComparing
            ? transparentize(0.8, color)
            : theme.colors.white};

          cursor: not-allowed;
        }
      }
    `}
  `,
  InputsComparer: styled.div<Pick<InputsProps, 'isComparing'>>`
    ${({ isComparing }) => css`
      height: ${isComparing ? '40px' : '0px'};
      visibility: ${isComparing ? 'visible' : 'hidden'};
      opacity: ${isComparing ? 1 : 0};
      transition: ${isComparing ? 'all 400ms' : 'all 0s'};
    `}
  `,
  Selectors: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      gap: 8px;
      display: flex;
      align-items: center;

      button {
        width: 34px;
        height: 34px;

        cursor: pointer;

        transition: all 400ms;

        &:hover {
          border: 1px solid ${theme.colors.neutral200};
        }

        &:active {
          transform: scale(0.9);
        }
      }
    }

    button {
      height: 100%;

      border-radius: 50%;
      border: 1px solid transparent;
      background: none;

      color: ${theme.colors.white};
      text-transform: capitalize;

      gap: 16px;
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
    }
  `,
  Arrow: styled.div<SelectionArrowProps>`
    ${({ colors, isSelecting }) => css`
      width: 0;
      height: 0;

      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid ${isSelecting ? colors.primary : theme.colors.white};
      border-radius: 2px;

      pointer-events: none;

      cursor: pointer;

      transform: rotate(0deg);
    `}
  `,
  Header: styled.div`
    padding: 0 16px 0 4px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${theme.colors.white};
      font-size: 12px;
    }
  `,
  Days: styled.div`
    height: fit-content;

    display: grid;
    grid-template-columns: repeat(7, 1fr);
  `,
  Day: styled.button<DayProps>`
    ${({ index, day, hoverColor, isToday, isSelected, isHovered }) => css`
      width: 100%;
      height: 100%;
      max-height: 38px;
      min-height: 38px;

      border: 1px solid #0f0f10;
      background: #1e1f22;

      color: #f7f7f7;
      font-size: 14px;

      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      user-select: none;

      transition: all 400ms;

      & + button {
        border-top: ${index > 5 ? '0px' : `1px solid #0F0F10`};
        border-left: ${index === 6
          ? `1px solid #0F0F10`
          : index === 13
          ? `1px solid #0F0F10`
          : index === 20
          ? `1px solid #0F0F10`
          : index === 27
          ? `1px solid #0F0F10`
          : index === 34
          ? `1px solid #0F0F10`
          : '0px'};
      }

      &:after {
        content: '';

        width: calc(100% + 2px);
        height: 1px;

        background: ${hoverColor};

        position: absolute;
        top: -1px;
        left: -1px;

        transition: all 400ms;

        opacity: 0;
        visibility: hidden;
      }

      &:before {
        content: '';

        width: 1px;
        height: calc(100% + 2px);

        background: ${hoverColor};

        position: absolute;
        top: -1px;
        left: -1px;

        transition: all 400ms;

        opacity: 0;
        visibility: hidden;
      }

      &:hover {
        border-color: ${hoverColor};
        background: ${hoverColor};

        color: #f6f7f9;
        font-weight: bold;

        cursor: pointer;

        &:before,
        &:after {
          opacity: 1;
          visibility: visible;
        }
      }

      ${!day.isShow && dayVariations(index, hoverColor, day).hide}
      ${isToday && dayVariations(index, hoverColor, day).today}
      ${day.isShow &&
      isHovered &&
      dayVariations(index, hoverColor, day).hovered}
      ${isSelected && dayVariations(index, hoverColor, day).selected}
    `}
  `,
  Months: styled(FixedSizeList)<SelectionArrowProps>`
    ${({ colors, isSelecting }) => css`
      width: 100%;
      height: 100%;
      max-height: 316px;

      padding: 8px;

      overflow-y: scroll;
      scroll-behavior: smooth;

      opacity: ${isSelecting ? 0 : 1};
      visibility: ${isSelecting ? 'hidden' : 'visible'};
      display: ${isSelecting ? 'none' : 'block'};

      > div > div {
        padding: 8px;
      }

      &::-webkit-scrollbar {
        width: 6px;

        background: ${colors.background};
      }

      &::-webkit-scrollbar-corner {
        background: rgba(0, 0, 0, 0);
      }

      &::-webkit-scrollbar-track {
        border-radius: 7px;
      }

      &::-webkit-scrollbar-thumb {
        background: ${colors.primary};
        border-radius: 7px;
      }
    `}
  `,
  Month: styled.div<MonthProps>`
    ${({ monthQuantity }) => css`
      & + div {
        margin-top: ${monthQuantity < 6 ? '0' : '24px'};
      }

      > span {
        color: ${theme.colors.white};
        font-size: 14px;
        text-transform: capitalize;

        margin-bottom: 6px;

        display: block;
      }
    `}
  `,
  Years: styled(FixedSizeList)<SelectionArrowProps>`
    ${({ colors, isSelecting }) => css`
      width: 100%;
      height: 100%;
      max-height: 316px;

      padding: 8px;

      overflow-y: scroll;
      scroll-behavior: smooth;

      opacity: ${isSelecting ? 1 : 0};
      visibility: ${isSelecting ? 'visible' : 'hidden'};
      display: ${isSelecting ? 'block' : 'none'};

      > div > div {
        padding: 8px;
      }

      &::-webkit-scrollbar {
        width: 6px;

        background: ${colors.background};
      }

      &::-webkit-scrollbar-corner {
        background: rgba(0, 0, 0, 0);
      }

      &::-webkit-scrollbar-track {
        border-radius: 7px;
      }

      &::-webkit-scrollbar-thumb {
        background: ${colors.primary};
        border-radius: 7px;
      }
    `}
  `,
  Year: styled.div<Pick<ContainerProps, 'colors'>>`
    ${({ colors }) => css`
      height: 100%;

      border-radius: 8px;
      background: ${transparentize(0.8, colors.background)};

      padding: 16px;

      gap: 12px;
      display: flex;
      flex-direction: column;

      div {
        row-gap: 6px;
        column-gap: 16px;
        flex: 1;
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        button {
          border-radius: 4px;
          border: 1px solid transparent;
          background: none;

          color: ${theme.colors.white};
          text-transform: uppercase;

          transition: all 400ms;

          &:hover {
            background: ${colors.primary} !important;

            color: ${theme.colors.white} !important;
          }
        }
      }
    `}
  `,
};
