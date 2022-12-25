import React from 'react';

import { Container, ISize } from './styles';

export interface IHeadingProps {
  size?: ISize;
  children: React.ReactNode;
}

export const Heading: React.FC<IHeadingProps> = ({ size = 'md', children }) => {
  return <Container size={size}>{children}</Container>;
};
