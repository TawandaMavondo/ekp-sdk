import { Rpc } from './types';

export function formatMaskAddress(value: Rpc | string): Rpc {
  return {
    method: 'formatMaskAddress',
    params: [value],
  };
}
