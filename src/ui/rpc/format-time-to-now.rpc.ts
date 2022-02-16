import { Rpc, RpcOrPrimitive } from './types';

export function formatTimeToNow(value: RpcOrPrimitive): Rpc {
  return {
    method: 'formatTimeToNow',
    params: [value],
  };
}
