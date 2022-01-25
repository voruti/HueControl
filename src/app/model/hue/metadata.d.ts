import { LightArchetype } from './lightArchetype';

/**
 * Additional metadata including a user given name.
 */
export interface Metadata {
  /**
   * Light archetype.
   * @deprecated Use archetype on device level.
   */
  archetype?: LightArchetype;

  /**
   * Human readable name of a resource. \
   * minLength: 1 – maxLength: 32
   */
  name?: string;
}
