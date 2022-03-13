import { Rpc } from './types';

export function formatMaskAddress(value: string | Rpc): Rpc {
  return {
    method: 'formatMaskAddress',
    params: [value],
  };
}
