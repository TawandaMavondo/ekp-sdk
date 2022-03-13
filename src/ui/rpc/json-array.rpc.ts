import { Rpc } from './types';

export function jsonArray(values: Rpc): Rpc {
  return {
    method: 'jsonArray',
    params: [values],
  };
}
