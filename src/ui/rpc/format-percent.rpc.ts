import { Rpc, RpcOrPrimitive } from './types';

export function formatPercent(value: RpcOrPrimitive): Rpc {
  return {
    method: 'formatPercent',
    params: [value],
  };
}
