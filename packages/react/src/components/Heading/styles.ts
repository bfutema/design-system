import styled, { css } from 'styled-components';

import { theme } from '../../styles';

import { Size } from './types';

const variants = {
  size: {
    sm: css`
      font-size: ${theme.fontSizes.xl};
    `,
    md: css`
      font-size: ${theme.fontSizes['2xl']};
    `,
    lg: css`
      font-size: ${theme.fontSizes['4xl']};
    `,
    '2xl': css`
      font-size: ${theme.fontSizes['5xl']};
    `,
    '3xl': css`
      font-size: ${theme.fontSizes['6xl']};
    `,
    '4xl': css`
      font-size: ${theme.fontSizes['7xl']};
    `,
    '5xl': css`
      font-size: ${theme.fontSizes['8xl']};
    `,
    '6xl': css`
      font-size: ${theme.fontSizes['9xl']};
    `,
  },
};

interface ContainerProps {
  size: Size;
}

export const Container = styled.h2<ContainerProps>`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.default};
  font-weight: ${theme.fontWeights.bold};

  margin: 0;

  ${({ size }) => variants.size[size]}
`;
