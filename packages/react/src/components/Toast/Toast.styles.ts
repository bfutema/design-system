import { motion } from 'framer-motion';
import styled from 'styled-components';

import { colors } from './Toast.colors';
import type { Toast } from './Toast.types';

export const ToastsContainer = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;

  gap: 0.75rem;
  display: flex;
  flex-direction: column;

  z-index: 9999;

  pointer-events: none;

  @media (max-width: 480px) {
    top: 1rem;
    right: 1rem;
    left: 1rem;
  }
`;

export const ToastWrapper = styled.div`
  pointer-events: auto;
`;

export const Container = styled(motion.div)<{ $type: Toast.Type }>`
  min-width: 320px;
  max-width: 420px;

  background: ${(props) => colors[props.$type].bg};
  border: 1.5px solid ${(props) => colors[props.$type].border};
  border-radius: 0.75rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);

  padding: 1rem 1.25rem;

  position: relative;

  gap: 0.75rem;
  display: flex;
  align-items: flex-start;

  overflow: hidden;

  &::before {
    content: '';

    width: 4px;
    height: 100%;

    background: ${(props) => colors[props.$type].icon};

    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const IconWrapper = styled.div<{ $type: Toast.Type }>`
  width: 24px;
  height: 24px;

  color: ${(props) => colors[props.$type].icon};

  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  flex: 1;
  gap: 0.25rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  color: #ffffff;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.4;

  margin: 0;
`;

export const Message = styled.p`
  color: #d1d5db;
  font-size: 0.875rem;
  line-height: 1.4;

  margin: 0;
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;

  background: transparent;
  border: none;
  border-radius: 0.375rem;

  color: #9ca3af;

  padding: 0.25rem;

  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);

    color: #ffffff;
  }

  &:active {
    transform: scale(0.9);
  }
`;
