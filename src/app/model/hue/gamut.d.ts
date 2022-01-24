import { XYGamut } from './xYGamut';

/**
 * Color gamut of color bulb. Some bulbs do not properly return the Gamut information. In this case this is not present.
 */
export interface Gamut {
  /**
   * CIE XY gamut position.
   */
  red: XYGamut;

  /**
   * CIE XY gamut position.
   */
  green: XYGamut;

  /**
   * CIE XY gamut position.
   */
  blue: XYGamut;
}
