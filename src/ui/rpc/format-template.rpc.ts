import { Rpc, RpcOrPrimitive } from './types';

export function formatTemplate(
  value: RpcOrPrimitive,
  scope: Record<string, RpcOrPrimitive>,
): Rpc {
  return {
    method: 'formatTemplate',
    params: [value, scope],
  };
}
