import { Rpc } from './types';

export function switchCase(on: Rpc, cases: Record<string, string | Rpc>): Rpc {
  return {
    method: 'switchCase',
    params: [on, cases],
  };
}
