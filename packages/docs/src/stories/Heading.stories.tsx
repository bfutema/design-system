import { Heading, IHeadingProps } from '@devxperience/react';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
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
} as Meta<IHeadingProps>;

export const Default: StoryObj<IHeadingProps> = {};

export const Big: StoryObj<IHeadingProps> = {
  args: {
    size: '6xl',
  },
};
