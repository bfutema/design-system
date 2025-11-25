/* eslint-disable @typescript-eslint/no-explicit-any */
import { Toast } from '@devxperience/react';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Feedback/Toast',
  component: Toast,
  args: {
    toast: {
      type: 'success',
      title: 'Success',
      message: 'Lorem ipsum dolor...',
    },
    message: 'Lorem ipsum dolor...',
  },
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
      },
      options: ['success', 'error', 'warning', 'info'],
    },
  },
} as Meta<any>;

export const Default: StoryObj<any> = {};
