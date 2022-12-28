import React, { useRef, useCallback } from 'react';

import { Colors, Corners, IValue } from '../types';
import { CalendarOptions, CalendarOptionsRef } from './CalendarOptions';
import { FilterOptions } from './FilterOptions';

import { Container, Actions } from './styles';

interface DateSelectorProps {
  colors: Colors;
  corners: Corners;
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  isFocused: boolean;
  isComparing: boolean;
  setIsComparing: React.Dispatch<React.SetStateAction<boolean>>;
  minDate?: Date;
  maxDate?: Date;
  value: IValue;
  onApply: (original: Date[], infoLabel: string) => void;
  onClear: () => void;
  onSelect: (original: Date[], infoLabel: string) => void;
  onPrev: () => void;
  onNext: () => void;
  onCancel: () => void;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
  colors,
  corners,
  startDate,
  setStartDate,
  isFocused,
  isComparing,
  setIsComparing,
  minDate,
  maxDate,
  value,
  onApply,
  onClear,
  onSelect,
  onPrev,
  onNext,
  onCancel,
}) => {
  const calendarOptionsRef = useRef<CalendarOptionsRef>(null);

  const handleClear = useCallback(() => {
    setIsComparing(false);
    onClear();
    calendarOptionsRef.current?.clear();
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

      <CalendarOptions
        ref={calendarOptionsRef}
        colors={colors}
        startDate={startDate}
        setStartDate={setStartDate}
        selectedDates={value.original}
        isComparing={isComparing}
        minDate={minDate}
        maxDate={maxDate}
        onSelect={onSelect}
        onPrev={onPrev}
        onNext={onNext}
      />

      <Actions colors={colors}>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>

        <button
          type="button"
          onClick={() => calendarOptionsRef.current?.localize()}
        >
          Localizar
        </button>

        <button type="button" onClick={handleClear}>
          Limpar
        </button>

        <button
          type="button"
          onClick={() => onApply(value.original, value.infoLabel)}
        >
          Aplicar
        </button>
      </Actions>
    </Container>
  );
};
