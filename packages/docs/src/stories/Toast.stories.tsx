/* eslint-disable @typescript-eslint/no-explicit-any */
import { Toast, Toasts, useToast } from '@devxperience/react';
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

export const Usability: StoryObj<any> = {
  render: () => {
    const { addToast } = useToast();

    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          type="button"
          onClick={() =>
            addToast({
              type: 'success',
              title: 'Success',
              message: 'Lorem ipsum dolor...',
            })
          }
          style={{
            background: 'rgba(34, 197, 94, 0.89)',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.5rem 1rem',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Success Toast
        </button>

        <button
          type="button"
          onClick={() =>
            addToast({
              type: 'error',
              title: 'Error',
              message: 'Lorem ipsum dolor...',
            })
          }
          style={{
            background: 'rgba(239, 68, 68, 0.89)',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.5rem 1rem',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Error Toast
        </button>

        <button
          type="button"
          onClick={() =>
            addToast({
              type: 'warning',
              title: 'Warning',
              message: 'Lorem ipsum dolor...',
            })
          }
          style={{
            background: 'rgba(245, 158, 11, 0.89)',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.5rem 1rem',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Warning Toast
        </button>

        <button
          type="button"
          onClick={() =>
            addToast({
              type: 'info',
              title: 'Info',
              message: 'Lorem ipsum dolor...',
            })
          }
          style={{
            background: 'rgba(59, 130, 246, 0.89)',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.5rem 1rem',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Info Toast
        </button>

        <Toasts />
      </div>
    );
  },
};

export const Success: StoryObj<any> = {
  args: {
    toast: {
      type: 'success',
      title: 'Success',
      message: 'Lorem ipsum dolor...',
    },
  },
};

export const Error: StoryObj<any> = {
  args: {
    toast: {
      type: 'error',
      title: 'Error',
      message: 'Lorem ipsum dolor...',
    },
  },
};

export const Warning: StoryObj<any> = {
  args: {
    toast: {
      type: 'warning',
      title: 'Warning',
      message: 'Lorem ipsum dolor...',
    },
  },
};

export const Info: StoryObj<any> = {
  args: {
    toast: {
      type: 'info',
      title: 'Info',
      message: 'Lorem ipsum dolor...',
    },
  },
};
