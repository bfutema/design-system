import React, { useRef, useMemo, useState, useCallback } from 'react';

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
  onApply: (selection: Date[]) => void;
}

export const SmartRange: React.FC<SmartRangeProps> = ({
  colors: colorsProps,
  placeholder,
  appearance = 'boxed',
  corners = 'rounded',
  language = 'pt-BR',
  onApply,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState<IValue>({
    original: [],
    formatted: '',
    infoLabel: '',
  });

  const [isFocused, setIsFocused] = useState<boolean>(true);
  const [isComparing, setIsComparing] = useState<boolean>(false);

  const colors: Full<Colors> = useMemo(() => {
    const { primary500, neutral800 } = theme.colors;

    return {
      ...{ primary: primary500, background: neutral800 },
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

  return (
    <Container
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
        isFocused={isFocused}
        isComparing={isComparing}
        setIsComparing={setIsComparing}
        onApply={handleApply}
        onClear={handleClear}
      />
    </Container>
  );
};
