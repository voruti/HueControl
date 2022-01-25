import { Type } from './type';
import { Metadata } from './metadata';
import { On } from './on';
import { Dimming } from './dimming';
import { ColorTemperature } from './colorTemperature';
import { Dynamics } from './dynamics';
import { Alert } from './alert';
import { Gradient } from './gradient';
import { SimpleColor } from './simpleColor';

export interface LightPut /* extends ???? */ {
  /**
   * Type of the supported resources.
   */
  type?: Type;

  /**
   * Additional metadata including a user given name.
   */
  metadata?: Metadata;

  on?: On;

  dimming?: Dimming;

  color_temperature?: ColorTemperature;

  color?: SimpleColor;

  dynamics?: Dynamics;

  alert?: Alert;

  /**
   * Basic feature containing gradient properties.
   */
  gradient?: Gradient;
}
