import React from 'react';

import { theme } from '../../styles';

import { Container } from './styles';

export interface TextProps {
  size?: keyof typeof theme.fontSizes;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ size = 'md', children }) => {
  return <Container size={size}>{children}</Container>;
};
