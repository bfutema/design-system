import React, { useCallback } from 'react';

import { Colors, Corners } from '../types';
import { CalendarOptions } from './CalendarOptions';
import { FilterOptions } from './FilterOptions';

import { Container, Actions } from './styles';

interface DateSelectorProps {
  colors: Colors;
  corners: Corners;
  isFocused: boolean;
  isComparing: boolean;
  setIsComparing: React.Dispatch<React.SetStateAction<boolean>>;
  onApply: (original: Date[], infoLabel: string) => void;
  onClear: () => void;
  children?: React.ReactNode;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
  colors,
  corners,
  isFocused,
  isComparing,
  setIsComparing,
  onApply,
  onClear,
}) => {
  const handleClear = useCallback(() => {
    console.info('onClear');
    // setIsComparing(false);
    // onClear();
    // calendarOptionsRef.current?.clear();
  }, [onClear, setIsComparing]);

  return (
    <Container colors={colors} corners={corners} isFocused={isFocused}>
      <FilterOptions
        colors={colors}
        isComparing={isComparing}
        setIsComparing={setIsComparing}
        onApply={onApply}
        onClearInputs={handleClear}
      />

      <CalendarOptions colors={colors} />

      <Actions colors={colors}>Actions</Actions>
    </Container>
  );
};
