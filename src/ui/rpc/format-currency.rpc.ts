import { Rpc } from './types';

export function formatCurrency(
  value: string | number | Rpc,
  fiatSymbol: string | Rpc,
): Rpc {
  return {
    method: 'formatCurrency',
    params: [value, fiatSymbol],
  };
}
