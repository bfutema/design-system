import { atom } from 'jotai';

import type * as Types from './Toast.types';

const toastsAtom = atom<Types.Toast.Toast[]>([]);

const addToast = atom(
  null,
  (get, set, payload: Omit<Types.Toast.Toast, 'id'>) => {
    const newToast = {
      ...payload,
      id: `toast-${Date.now()}-${Math.random()}`,
      duration: payload.duration ?? 5000,
    };

    const toasts = get(toastsAtom);
    set(toastsAtom, [...toasts, newToast]);

    if (newToast.duration > 0) {
      setTimeout(() => {
        set(toastsAtom, (prev) =>
          prev.filter((toast) => toast.id !== newToast.id),
        );
      }, newToast.duration);
    }
  },
);

const removeToast = atom(null, (get, set, id: string) => {
  const toasts = get(toastsAtom);

  set(
    toastsAtom,
    toasts.filter((toast) => toast.id !== id),
  );
});

export const state = {
  addToast,
  removeToast,
};

export const atoms = {
  toasts: toastsAtom,
};
