import { Rpc, RpcOrPrimitive } from './types';

export function jsonArray(values: RpcOrPrimitive): Rpc {
  return {
    method: 'jsonArray',
    params: [values],
  };
}
