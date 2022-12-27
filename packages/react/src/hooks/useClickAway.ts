// /* eslint-disable consistent-return */
import React, { useEffect, useRef } from 'react';

function useClickAway(
  ref: React.RefObject<HTMLElement>,
  handler: (event: Event | MouseEvent) => void,
  options: { enabled: boolean },
) {
  const { enabled = true } = options || {};
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    // if (!enabled) return;

    function internalHandler(e: MouseEvent): void {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handlerRef.current(e);
      }
    }

    document.addEventListener('mousedown', internalHandler);

    return () => {
      document.removeEventListener('mousedown', internalHandler);
    };
  }, [ref, enabled]);
}

export { useClickAway };
