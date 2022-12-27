import React, { useRef, useState } from 'react';

import { DateHelper } from '../../../helpers/DateHelper';
import { Colors } from '../types';

import { FilterOptionsStyles } from './styles';

interface FilterOptionsProps {
  colors: Colors;
  isComparing: boolean;
  setIsComparing: React.Dispatch<React.SetStateAction<boolean>>;
  onApply: (original: Date[], infoLabel: string) => void;
  onClearInputs: () => void;
}

export const FilterOptions: React.FC<FilterOptionsProps> = ({
  colors,
  isComparing,
  setIsComparing,
  onApply,
  onClearInputs,
}) => {
  const switcherRef = useRef<HTMLInputElement>(null);

  const [thisWeekWorkingDays, setThisWeekWorkingDays] = useState<boolean>(true);
  const [lastWeekWorkingDays, setLastWeekWorkingDays] = useState<boolean>(true);

  return (
    <FilterOptionsStyles.Container colors={colors}>
      <FilterOptionsStyles.FilterOption
        type="button"
        colors={colors}
        onClick={() => onApply([DateHelper.getToday()], 'Hoje')}
      >
        Hoje
      </FilterOptionsStyles.FilterOption>

      <FilterOptionsStyles.FilterOption
        type="button"
        colors={colors}
        onClick={() => onApply([DateHelper.getYesterday()], 'Ontem')}
      >
        Ontem
      </FilterOptionsStyles.FilterOption>

      <div style={{ width: '100%', display: 'flex' }}>
        <FilterOptionsStyles.FilterOption
          type="button"
          colors={colors}
          onClick={() =>
            onApply(DateHelper.getThisWeek(thisWeekWorkingDays), 'Esta Semana')
          }
        >
          Esta semana
        </FilterOptionsStyles.FilterOption>

        <FilterOptionsStyles.FilterOption
          type="button"
          colors={colors}
          onClick={() => setThisWeekWorkingDays(!thisWeekWorkingDays)}
        >
          <span>{thisWeekWorkingDays ? '(Seg - Hoje)' : '(Sáb - Hoje)'}</span>

          <FilterOptionsStyles.FilterOptionArrow colors={colors} />
        </FilterOptionsStyles.FilterOption>
      </div>

      <FilterOptionsStyles.FilterOption
        type="button"
        colors={colors}
        onClick={() => onApply(DateHelper.getLastSevenDays(), 'Últimos 7 dias')}
      >
        Últimos 7 dias
      </FilterOptionsStyles.FilterOption>

      <div style={{ width: '100%', display: 'flex' }}>
        <FilterOptionsStyles.FilterOption
          type="button"
          colors={colors}
          onClick={() =>
            onApply(
              DateHelper.getLastWeek(lastWeekWorkingDays),
              'Última Semana',
            )
          }
        >
          Última semana
        </FilterOptionsStyles.FilterOption>

        <FilterOptionsStyles.FilterOption
          type="button"
          colors={colors}
          style={{ width: '112px' }}
          onClick={() => setLastWeekWorkingDays(!lastWeekWorkingDays)}
        >
          <span>{lastWeekWorkingDays ? '(Seg - Sáb)' : '(Sáb - Dom)'}</span>

          <FilterOptionsStyles.FilterOptionArrow colors={colors} />
        </FilterOptionsStyles.FilterOption>
      </div>

      <FilterOptionsStyles.FilterOption
        type="button"
        colors={colors}
        onClick={() =>
          onApply(DateHelper.getLastFourteenDays(), 'Últimos 14 dias')
        }
      >
        Últimos 14 dias
      </FilterOptionsStyles.FilterOption>

      <FilterOptionsStyles.FilterOption
        type="button"
        colors={colors}
        onClick={() => onApply(DateHelper.getThisMonth(), 'Este Mês')}
      >
        Este Mês
      </FilterOptionsStyles.FilterOption>

      <FilterOptionsStyles.FilterOption
        type="button"
        colors={colors}
        onClick={() =>
          onApply(DateHelper.getLastThirtyDays(), 'Últimos 30 dias')
        }
      >
        Últimos 30 dias
      </FilterOptionsStyles.FilterOption>

      <FilterOptionsStyles.FilterOption
        type="button"
        colors={colors}
        onClick={() => onApply(DateHelper.getLastMonth(), 'Último Mês')}
      >
        Último mês
      </FilterOptionsStyles.FilterOption>

      <FilterOptionsStyles.FilterOption
        type="button"
        colors={colors}
        onClick={() => onApply([], '')}
      >
        Todo o período
      </FilterOptionsStyles.FilterOption>

      <FilterOptionsStyles.Comparer colors={colors}>
        <span>Comparar</span>

        <FilterOptionsStyles.Switcher
          colors={colors}
          isActive={isComparing}
          onClick={() => {
            onClearInputs();
            setIsComparing(!isComparing);
          }}
        >
          <FilterOptionsStyles.SwitcherBall
            colors={colors}
            isActive={isComparing}
          />

          <input
            ref={switcherRef}
            type="radio"
            checked={isComparing}
            onChange={() => setIsComparing(!isComparing)}
          />
        </FilterOptionsStyles.Switcher>
      </FilterOptionsStyles.Comparer>
    </FilterOptionsStyles.Container>
  );
};
