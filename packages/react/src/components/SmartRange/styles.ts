import { getContrast } from 'polished';
import styled, { css } from 'styled-components';

import { theme } from '../../styles';

import { Appearance, Colors, Corners } from './types';

interface ContainerProps {
  colors: Colors;
  appearance: Appearance;
  corners: Corners;
  isFocused: boolean;
}

export const container = {
  getContrastColor: ({ background }: Colors) => {
    const { black, white } = theme.colors;
    return getContrast(background, white) < 3.5 ? black : white;
  },
  getBorderColor: (colors: Colors, isFocused: boolean) => {
    if (isFocused) return colors.primary;
    return colors.background;
  },
};

const variants = (colors: Colors, isFocused: boolean) => ({
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
  appearance: {
    standard: css`
      border-bottom: 1px solid ${container.getBorderColor(colors, isFocused)};
      background: transparent;
    `,
    filled: css`
      border-bottom: 1px solid ${container.getBorderColor(colors, isFocused)};
      background: ${colors.background};
    `,
    outlined: css`
      border: 1px solid ${container.getBorderColor(colors, isFocused)};
      background: transparent;
    `,
    boxed: css`
      border: 1px solid ${container.getBorderColor(colors, isFocused)};
      background: ${colors.background};
    `,
  },
});

export const Container = styled.div<ContainerProps>`
  ${({ colors, appearance, corners, isFocused }) => css`
    box-sizing: border-box;

    width: fit-content;
    height: 40px;

    ${variants(colors, isFocused).appearance[appearance]}
    ${variants(colors, isFocused).corners[corners]}

    font-size: ${theme.fontSizes.md};

    position: relative;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    transition: all 0.2s;

    &:not(:has(:focus)):hover {
      border-color: ${theme.colors.neutral200};
    }

    input {
      box-sizing: border-box;

      height: 38px;

      outline: 0;

      border: none;
      border-radius: inherit;
      background: inherit;

      color: ${container.getContrastColor(colors)};
      font-size: ${theme.fontSizes.sm};

      padding: 0 ${theme.space[3]};

      flex: 1;

      cursor: pointer;
    }
  `}
`;

interface ArrowProps {
  colors: Colors;
  isFocused: boolean;
}

export const Arrow = styled.div<ArrowProps>`
  ${({ colors: { primary }, isFocused }) => css`
    width: 0;
    height: 0;

    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid ${isFocused ? primary : theme.colors.neutral200};

    position: absolute;
    right: ${theme.space[3]};

    pointer-events: none;

    cursor: pointer;

    transform: ${isFocused ? 'rotate(0deg)' : 'rotate(180deg)'};

    transition: all 200ms;
  `}
`;
