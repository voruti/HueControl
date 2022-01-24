import { RType } from './rType';

export interface Reference {
  /**
   * The unique id of the referenced resource. \
   * pattern: ^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   */
  rid: string;

  /**
   * The type of the referenced resource.
   */
  rtype: RType;
}
