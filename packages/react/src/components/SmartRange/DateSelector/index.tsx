import React from 'react';

import { Colors, Corners } from '../types';

import { Container } from './styles';

interface DateSelectorProps {
  colors: Colors;
  corners: Corners;
  isFocused: boolean;
  children?: React.ReactNode;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
  colors,
  corners,
  isFocused,
}) => {
  return (
    <Container colors={colors} corners={corners} isFocused={isFocused}>
      <span>DateSelector</span>
    </Container>
  );
};
