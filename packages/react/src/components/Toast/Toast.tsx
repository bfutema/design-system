import React from 'react';

import { Icon, type IconTypes } from '../Icon';

import * as Motion from './Toast.motion';
import * as Styles from './Toast.styles';
import type * as Types from './Toast.types';

export const Toast: React.FC<Types.Toast.Props> = ({ toast, onClose }) => {
  const icons: Record<Types.Toast.Type, IconTypes.Props['name']> = {
    success: 'FiCheckCircle',
    error: 'FiXCircle',
    warning: 'FiAlertTriangle',
    info: 'FiInfo',
  };

  return (
    <Styles.Container
      $type={toast.type}
      variants={Motion.variants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
    >
      <Styles.IconWrapper $type={toast.type}>
        <Icon name={icons[toast.type]} size={20} />
      </Styles.IconWrapper>

      <Styles.Content>
        <Styles.Title>{toast.title}</Styles.Title>
        {toast.message && <Styles.Message>{toast.message}</Styles.Message>}
      </Styles.Content>

      <Styles.CloseButton onClick={onClose} aria-label="Fechar notificação">
        <Icon name="FiX" size={16} />
      </Styles.CloseButton>
    </Styles.Container>
  );
};
