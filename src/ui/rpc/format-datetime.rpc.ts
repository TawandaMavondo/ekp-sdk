import { Rpc } from './types';

export function formatDatetime(value: Rpc | string | number): Rpc {
  return {
    method: 'formatDatetime',
    params: [value],
  };
}
