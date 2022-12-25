import React from 'react';

import { theme } from '../../styles';
import { Container } from './styles';

export interface ITextProps {
  size?: keyof typeof theme.fontSizes;
  children: React.ReactNode;
}

export const Text: React.FC<ITextProps> = ({ size = 'md', children }) => {
  return <Container size={size}>{children}</Container>;
};
