/* eslint-disable prettier/prettier */
import React from 'react';

import { type IconTypes, iconsMap } from './Icon.types';

export const Icon: React.FC<IconTypes.Props> = ({ name, size = 16, color = 'currentColor' }) => {
  const SelectedIcon = iconsMap[name];

  return <SelectedIcon size={size} color={color} />;
};
