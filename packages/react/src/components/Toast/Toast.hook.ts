import { useSetAtom } from 'jotai';

import { state } from './Toast.state';

export function useToast() {
  const addToast = useSetAtom(state.addToast);
  const removeToast = useSetAtom(state.removeToast);

  return {
    addToast,
    removeToast,
  };
}
