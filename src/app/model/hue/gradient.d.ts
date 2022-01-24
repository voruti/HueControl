import { GradientPointGet } from './gradientPointGet ';

/**
 * Basic feature containing gradient properties.
 */
export interface Gradient {
  /**
   * Collection of gradients points. For control of the gradient points through a PUT a minimum of 2 points need to be provided. \
   * maxItems: 5
   */
  points: GradientPointGet[];

  /**
   * Number of color points that gradient lamp is capable of showing with gradience.
   */
  points_capable: number;
}
