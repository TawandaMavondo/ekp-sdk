import { Rpc } from './types';

export function commify(value: number | Rpc): Rpc {
  return {
    method: 'commify',
    params: [value],
  };
}
