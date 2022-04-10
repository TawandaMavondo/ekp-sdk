import { Rpc } from './types';

export function navigateBack(): Rpc {
  return {
    method: 'navigateBack',
    params: [],
  };
}
