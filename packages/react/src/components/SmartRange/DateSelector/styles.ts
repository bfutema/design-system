import styled, { css } from 'styled-components';

import { theme } from '../../../styles';
import { container } from '../styles';
import { Colors, Corners } from '../types';

interface ContainerProps {
  colors: Colors;
  corners: Corners;
  isFocused: boolean;
}

const variants = (_: Colors) => ({
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

    ${variants(colors).corners[corners]};

    background: ${colors.background};

    color: ${container.getContrastColor(colors)};

    margin-top: ${isFocused ? '0px' : '-8px'};
    padding: ${theme.space[3]};

    position: absolute;
    top: calc(100% + 8px);
    left: 0;

    opacity: ${isFocused ? 1 : 0};
    visibility: ${isFocused ? 'visible' : 'hidden'};

    transition: all 0.2s;
  `}
`;
