export namespace Toast {
  export type Props = {
    toast: Toast;
    onClose: () => void;
  };

  export type Toast = {
    id: string;
    type: Type;
    title: string;
    message?: string;
    duration?: number;
  };

  export type Type = 'success' | 'error' | 'warning' | 'info';
}
