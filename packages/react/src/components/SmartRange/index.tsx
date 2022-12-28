import React, { useRef, useMemo, useState, useCallback } from 'react';

import { addMonths } from 'date-fns';

import { useClickAway } from '../../hooks/useClickAway';
import { theme } from '../../styles';
import { Full } from '../../types/IFull';
import { DateSelector } from './DateSelector';

import { Container, Arrow } from './styles';
import { Appearance, Colors, Corners, IValue } from './types';

export interface SmartRangeProps {
  colors?: Partial<Colors>;
  placeholder?: string;
  appearance?: Appearance;
  corners?: Corners;
  language?: 'pt-BR' | 'en-US';
  minDate?: Date;
  maxDate?: Date;
  onApply: (selection: Date[]) => void;
}

export const SmartRange: React.FC<SmartRangeProps> = ({
  colors: colorsProps,
  placeholder,
  appearance = 'boxed',
  corners = 'rounded',
  language = 'pt-BR',
  minDate,
  maxDate,
  onApply,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState<IValue>({
    original: [],
    formatted: '',
    infoLabel: '',
  });

  const [startDate, setStartDate] = useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isComparing, setIsComparing] = useState<boolean>(false);

  const colors: Full<Colors> = useMemo(() => {
    return {
      ...{
        primary: theme.colors.primary500,
        secondary: theme.colors.tertiary500,
        background: theme.colors.neutral800,
        shadow: theme.colors.black,
      },
      ...colorsProps,
    };
  }, []);

  const onSelect = useCallback(
    (original: Date[], infoLabel: string) => {
      let formatted = '';

      if (original.length === 0) formatted = `Todo o período`;

      if (original.length === 1) {
        formatted = `${original[0].toLocaleDateString(language)}`;
      }

      if (original.length === 2) {
        const first = original[0].toLocaleDateString(language);
        const last = original[1].toLocaleDateString(language);

        formatted = `${first} - ${last}`;
      }

      if (original.length === 3) {
        const fromStartComparer = original[0].toLocaleDateString(language);
        const fromEndComparer = original[1].toLocaleDateString(language);
        const toStartComparer = original[2].toLocaleDateString(language);

        const from = `${fromStartComparer} - ${fromEndComparer}`;
        const to = `${toStartComparer}`;

        formatted = `${from} vs ${to}`;
      }

      if (original.length === 4) {
        const fromStartComparer = original[0].toLocaleDateString(language);
        const fromEndComparer = original[1].toLocaleDateString(language);
        const toStartComparer = original[2].toLocaleDateString(language);
        const toEndComparer = original[3].toLocaleDateString(language);

        const from = `${fromStartComparer} - ${fromEndComparer}`;
        const to = `${toStartComparer} - ${toEndComparer}`;

        formatted = `${from} vs ${to}`;
      }

      setValue({ original, formatted, infoLabel });

      if (inputRef.current) inputRef.current.setAttribute('value', formatted);
    },
    [language],
  );

  const handleFocus = () => setIsFocused(true);

  const handleClear = useCallback(() => {
    setValue({ original: [], formatted: '', infoLabel: '' });
    if (inputRef.current) inputRef.current.setAttribute('value', '');
  }, []);

  const handleApply = useCallback(
    (selection: Date[], infoLabel: string) => {
      onApply(selection);
      setIsFocused(false);
      onSelect(selection, infoLabel);
    },
    [onApply, onSelect],
  );

  useClickAway(containerRef, () => setIsFocused(false), {
    enabled: isFocused,
  });

  return (
    <Container
      ref={containerRef}
      colors={colors}
      appearance={appearance}
      corners={corners}
      isFocused={isFocused}
    >
      <input
        ref={inputRef}
        placeholder={placeholder}
        onFocus={handleFocus}
        readOnly
      />

      <Arrow colors={colors} isFocused={isFocused} />

      <DateSelector
        colors={colors}
        corners={corners}
        startDate={startDate}
        setStartDate={setStartDate}
        isFocused={isFocused}
        isComparing={isComparing}
        setIsComparing={setIsComparing}
        minDate={minDate}
        maxDate={maxDate}
        onApply={handleApply}
        onClear={handleClear}
        onSelect={onSelect}
        onPrev={() => setStartDate((state) => addMonths(state, -1))}
        onNext={() => setStartDate((state) => addMonths(state, +1))}
        onCancel={() => setIsFocused(false)}
        value={value}
      />
    </Container>
  );
};
