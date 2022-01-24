/**
 * The gamut types supported by hue:
 *
 * A: Gamut of early Philips color-only products. \
 * B: Limited gamut of first Hue color products. \
 * C: Richer color gamut of Hue white and color ambiance products. \
 * other: Color gamut of non-hue products with non-hue gamuts resp w/o gamut.
 */
export enum GamutType {
  /**
   * Gamut of early Philips color-only products.
   */
  A,

  /**
   * Limited gamut of first Hue color products.
   */
  B,

  /**
   * Richer color gamut of Hue white and color ambiance products.
   */
  C,

  /**
   * Color gamut of non-hue products with non-hue gamuts resp w/o gamut.
   */
  other,
}
