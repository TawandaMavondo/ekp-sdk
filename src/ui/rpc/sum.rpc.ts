import { Rpc } from './types';

export function sum(values: Rpc): Rpc {
  return {
    method: 'sum',
    params: [values],
  };
}
