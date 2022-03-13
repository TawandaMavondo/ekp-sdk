import { Rpc } from './types';

export function formatPercent(value: number | Rpc): Rpc {
  return {
    method: 'formatPercent',
    params: [value],
  };
}
