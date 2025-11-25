/* eslint-disable @typescript-eslint/no-namespace */
import * as FeatherIcons from 'react-icons/fi';

export const iconsMap = FeatherIcons;

export namespace IconTypes {
  export type Props = {
    name: keyof typeof FeatherIcons;
    size?: number;
    color?: string;
  };
}
