import { Gamut } from './gamut';
import { GamutType } from './gamutType';
import { SimpleColor } from './simpleColor';

export interface Color extends SimpleColor {
  /**
   * Color gamut of color bulb. Some bulbs do not properly return the Gamut information. In this case this is not present.
   */
  gamut?: Gamut;

  gamut_type: GamutType;
}
