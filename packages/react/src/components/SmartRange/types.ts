// Planning to create component
/**
 * *Cores para controle externo
 * Cor de texto
 * Cor de bordas externas
 * Cor de linhas divisórias
 * Cor de fundo
 */

export type Colors = {
  primary: string;
  secondary: string;
  background: string;
  shadow: string;
};

export type Appearance = 'standard' | 'filled' | 'outlined' | 'boxed';

export type Corners = 'square' | 'rounded' | 'round';

export type IValue = { original: Date[]; formatted: string; infoLabel: string };
