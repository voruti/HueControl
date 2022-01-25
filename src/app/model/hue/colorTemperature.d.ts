import { MirekSchema } from './mirekSchema';

export interface ColorTemperature {
  /**
   * Color temperature in mirek or null when the light color is not in the ct spectrum. \
   * minimum: 153 – maximum: 500
   */
  mirek?: number;

  /**
   * Indication whether the value presented in mirek is valid.
   */
  mirek_valid?: boolean;

  mirek_schema?: MirekSchema;
}
