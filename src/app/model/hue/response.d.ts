import { Error } from './error';
import { ResponseType } from './responseType';

export interface Response<T extends ResponseType> {
  errors: Error[];

  data: T[];
}
