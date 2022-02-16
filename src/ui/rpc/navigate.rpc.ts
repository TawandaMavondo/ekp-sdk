import { Rpc, RpcOrPrimitive } from './types';

export function navigate(
  location: RpcOrPrimitive,
  newTab: RpcOrPrimitive = false,
  external: RpcOrPrimitive = false,
): Rpc {
  return {
    method: 'navigate',
    params: [location, newTab, external],
  };
}
