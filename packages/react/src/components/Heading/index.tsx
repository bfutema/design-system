import React from 'react';

import { Container } from './styles';
import { Size } from './types';

export interface HeadingProps {
  size?: Size;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ size = 'md', children }) => {
  return <Container size={size}>{children}</Container>;
};
