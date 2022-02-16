import { Rpc, RpcOrPrimitive } from './types';

export function formatCurrency(
  value: RpcOrPrimitive,
  fiatSymbol: RpcOrPrimitive,
): Rpc {
  return {
    method: 'formatCurrency',
    params: [value, fiatSymbol],
  };
}
