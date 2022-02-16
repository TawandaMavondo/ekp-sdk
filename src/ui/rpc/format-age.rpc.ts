import { Rpc, RpcOrPrimitive } from './types';

export function formatAge(value: RpcOrPrimitive): Rpc {
  return {
    method: 'formatAge',
    params: [value],
  };
}
