import { Text, TextProps } from '@devxperience/react';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor...',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Big: StoryObj<TextProps> = {
  args: {
    size: '9xl',
  },
};
