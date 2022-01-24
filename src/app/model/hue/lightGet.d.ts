import { Type } from './type';
import { ResponseType } from './responseType';
import { Owner } from './owner';
import { Metadata } from './metadata';
import { On } from './on';
import { Dimming } from './dimming';
import { ColorTemperature } from './colorTemperature';
import { Color } from './color';
import { Dynamics } from './dynamics';
import { Alert } from './alert';
import { Mode } from './mode';
import { Gradient } from './gradient';

export interface LightGet extends ResponseType {
  /**
   * Type of the supported resources.
   */
  type?: Type;

  /**
   * Unique identifier representing a specific resource instance. \
   * pattern: ^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   */
  id: string;

  /**
   * Clip v1 resource identifier. \
   * pattern: ^(\/[a-z]{4,32}\/[0-9a-zA-Z-]{1,32})?$
   */
  id_v1?: string;

  /**
   * Owner of the service, in case the owner service is deleted, the service also gets deleted.
   */
  owner: Owner;

  /**
   * Additional metadata including a user given name.
   */
  metadata: Metadata;

  on: On;

  dimming?: Dimming;

  color_temperature?: ColorTemperature;

  color?: Color;

  dynamics?: Dynamics;

  alert?: Alert;

  mode: Mode;

  /**
   * Basic feature containing gradient properties.
   */
  gradient?: Gradient;
}
