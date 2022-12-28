import { SmartRange, SmartRangeProps } from '@devxperience/react';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Advanced/SmartRange',
  component: SmartRange,
  args: {
    placeholder: 'Selecione uma data',
  },
  argTypes: {
    appearance: {
      options: ['standard', 'filled', 'outlined', 'boxed'],
      defaultValue: 'boxed',
      description: 'Altera a aparência do input',
      control: { type: 'inline-radio' },
    },
    corners: {
      options: ['square', 'rounded', 'round'],
      defaultValue: 'rounded',
      description: 'Altera o arredondamento das bordas',
      control: { type: 'inline-radio' },
    },
    language: {
      options: ['pt-BR', 'en-US'],
      defaultValue: 'pt-BR',
      description: 'Altera o UTC',
      control: { type: 'inline-radio' },
    },
    onApply: {
      action: 'onApply',
    },
  },
} as Meta<SmartRangeProps>;

export const Default: StoryObj<SmartRangeProps> = {
  args: {
    placeholder: 'Selecione uma data',
  },
};
