import { Heading, HeadingProps } from '@devxperience/react';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor...',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Big: StoryObj<HeadingProps> = {
  args: {
    size: '6xl',
  },
};
