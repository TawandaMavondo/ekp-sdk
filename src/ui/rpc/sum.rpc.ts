import { Rpc, RpcOrPrimitive } from './types';

export function sum(values: RpcOrPrimitive): Rpc {
  return {
    method: 'sum',
    params: [values],
  };
}
