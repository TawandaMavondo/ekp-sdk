import { Rpc } from './types';

export function formatAge(value: number | Rpc): Rpc {
  return {
    method: 'formatAge',
    params: [value],
  };
}
