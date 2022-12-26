import React, { useMemo, useState } from 'react';

import { theme } from '../../styles';
import { Full } from '../../types/IFull';
import { DateSelector } from './DateSelector';

import { Container, Arrow } from './styles';
import { Appearance, Colors, Corners } from './types';

export interface SmartRangeProps {
  colors?: Partial<Colors>;
  placeholder?: string;
  appearance?: Appearance;
  corners?: Corners;
}

export const SmartRange: React.FC<SmartRangeProps> = ({
  colors: colorsProps,
  placeholder,
  appearance = 'boxed',
  corners = 'rounded',
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const colors: Full<Colors> = useMemo(() => {
    const { primary500, neutral800 } = theme.colors;

    return {
      ...{ primary: primary500, background: neutral800 },
      ...colorsProps,
    };
  }, []);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  return (
    <Container
      colors={colors}
      appearance={appearance}
      corners={corners}
      isFocused={isFocused}
    >
      <input
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        readOnly
      />

      <Arrow colors={colors} isFocused={isFocused} />

      <DateSelector colors={colors} corners={corners} isFocused={isFocused} />
    </Container>
  );
};
