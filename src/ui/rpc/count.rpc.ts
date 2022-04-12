import { Rpc } from './types';

export function count(values: Rpc): Rpc {
  return {
    method: 'count',
    params: [values],
  };
}
