export interface Dimming {
  /**
   * Brightness percentage. Value cannot be 0, writing 0 changes it to lowest possible brightness. \
   * maximum: 100
   */
  brightness: number;

  /**
   * Percentage of the maximum lumen the device outputs on minimum brightness. \
   * minimum: 0 – maximum: 100
   */
  min_dim_level?: number;
}
