import styled, { css } from 'styled-components';

import { theme } from '../../styles';
import { Size } from './types';

const variants = {
  size: {
    xxs: css`
      font-size: ${theme.fontSizes.xxs};
    `,
    xs: css`
      font-size: ${theme.fontSizes.xs};
    `,
    sm: css`
      font-size: ${theme.fontSizes.sm};
    `,
    md: css`
      font-size: ${theme.fontSizes.md};
    `,
    lg: css`
      font-size: ${theme.fontSizes.lg};
    `,
    xl: css`
      font-size: ${theme.fontSizes.xl};
    `,
    '2xl': css`
      font-size: ${theme.fontSizes['2xl']};
    `,
    '4xl': css`
      font-size: ${theme.fontSizes['4xl']};
    `,
    '5xl': css`
      font-size: ${theme.fontSizes['5xl']};
    `,
    '6xl': css`
      font-size: ${theme.fontSizes['6xl']};
    `,
    '7xl': css`
      font-size: ${theme.fontSizes['7xl']};
    `,
    '8xl': css`
      font-size: ${theme.fontSizes['8xl']};
    `,
    '9xl': css`
      font-size: ${theme.fontSizes['9xl']};
    `,
  },
};

interface ContainerProps {
  size: Size;
}

export const Container = styled.p<ContainerProps>`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.default};
  line-height: ${theme.lineHeights.base};

  margin: 0;

  ${({ size }) => variants.size[size]}
`;
