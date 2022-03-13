import { Rpc } from './types';

export function formatDatetime(value: number | Rpc): Rpc {
  return {
    method: 'formatDatetime',
    params: [value],
  };
}
