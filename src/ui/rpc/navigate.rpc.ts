import { Rpc } from './types';

export function navigate(
  location: string | Rpc,
  newTab: boolean | Rpc = false,
  external: boolean | Rpc = false,
): Rpc {
  return {
    method: 'navigate',
    params: [location, newTab, external],
  };
}
