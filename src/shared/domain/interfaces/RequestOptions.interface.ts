import { RequestMethod } from '@/shared/domain/types/RequestMethod.type';

export interface RequestOptions<TBody = unknown> {
  method: RequestMethod;
  body?: TBody;
  headers?: Record<string, string>;
  token?: string;
}
