import { Rpc } from './types';

export function not(condition: Rpc): Rpc {
  return {
    method: 'not',
    params: [condition],
  };
}
