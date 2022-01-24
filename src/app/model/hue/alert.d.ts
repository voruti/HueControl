import { AlertEffectType } from './alertEffectType';

export interface Alert {
  /**
   * Alert effects that the light supports.
   */
  action_values: AlertEffectType[];
}
