import React from 'react';

import { AnimatePresence } from 'framer-motion';
import { useAtomValue, useSetAtom } from 'jotai';

import { Toast } from './Toast';
import { atoms, state } from './Toast.state';
import { ToastsContainer, ToastWrapper } from './Toast.styles';

export const Toasts: React.FC = () => {
  const toasts = useAtomValue(atoms.toasts);
  const removeToast = useSetAtom(state.removeToast);

  return (
    <ToastsContainer>
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => {
          return (
            <ToastWrapper key={toast.id}>
              <Toast toast={toast} onClose={() => removeToast(toast.id)} />
            </ToastWrapper>
          );
        })}
      </AnimatePresence>
    </ToastsContainer>
  );
};
