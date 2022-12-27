// Planning to create component
/**
 * *Cores para controle externo
 * Cor de texto
 * Cor de bordas externas
 * Cor de linhas divisórias
 * Cor de fundo
 */

/**
 * Funcionalidades
 * "variants.appearance": 'standard' | 'filled' | 'outlined' | 'boxed'
 * "variants.corners": 'square' | 'rounded' | 'round'
 */

export type Colors = {
  primary: string;
  background: string;
};

export type Appearance = 'standard' | 'filled' | 'outlined' | 'boxed';

export type Corners = 'square' | 'rounded' | 'round';

export type IValue = { original: Date[]; formatted: string; infoLabel: string };
