import { Reference } from './reference';

/**
 * Owner of the service, in case the owner service is deleted, the service also gets deleted.
 */
export interface Owner extends Reference {}
