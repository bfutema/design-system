import { getContrast } from 'polished';

import { theme } from '../styles';

type Props = { color: string };

export function getContrastColor({ color }: Props) {
  const { black, white } = theme.colors;
  return getContrast(color, white) < 3.5 ? black : white;
}
