import React from 'react';

import { Colors } from '../types';

import { CalendarOptionsStyles } from './styles';

interface CalendarOptionsProps {
  colors: Colors;
  children?: React.ReactNode;
}

export const CalendarOptions: React.FC<CalendarOptionsProps> = ({ colors }) => {
  return (
    <CalendarOptionsStyles.Container colors={colors}>
      <span>CalendarOptions</span>
    </CalendarOptionsStyles.Container>
  );
};
