import { Rpc } from './types';

export function formatTimeToNow(value: number | Rpc): Rpc {
  return {
    method: 'formatTimeToNow',
    params: [value],
  };
}
