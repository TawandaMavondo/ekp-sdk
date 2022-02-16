import { Rpc, RpcOrPrimitive } from './types';

export function formatToken(value: RpcOrPrimitive): Rpc {
  return {
    method: 'formatToken',
    params: [value],
  };
}
