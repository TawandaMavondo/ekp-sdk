import { Rpc } from './types';

export function runAll(...rpcs: Rpc[]): Rpc {
  return {
    method: 'runAll',
    params: rpcs,
  };
}
