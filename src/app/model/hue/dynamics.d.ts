import { DynamicsStatus } from './dynamicsStatus';
import { SupportedDynamicStatus } from './supportedDynamicStatus';

export interface Dynamics {
  /**
   * Speed of dynamic palette or effect. The speed is valid for the dynamic palette
   * if the status is dynamic_palette or for the corresponding effect listed in status.
   * In case of status none, the speed is not valid. \
   * minimum: 0 – maximum: 1
   */
  speed?: number;

  /**
   * Current status of the lamp with dynamics.
   */
  status?: DynamicsStatus;

  /**
   * Statuses in which a lamp could be when playing dynamics.
   */
  status_values?: SupportedDynamicStatus[];

  /**
   * Indicates whether the value presented in speed is valid.
   */
  speed_valid?: boolean;

  /**
   * Duration of a light transition in ms. Accuracy is in 100ms steps. \
   * maximum: 6000000
   */
  duration?: number;
}
