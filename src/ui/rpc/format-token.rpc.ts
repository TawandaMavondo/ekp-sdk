import { Rpc } from './types';

export function formatToken(value: number | Rpc): Rpc {
  return {
    method: 'formatToken',
    params: [value],
  };
}
