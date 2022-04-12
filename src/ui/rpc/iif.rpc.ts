import { Rpc } from './types';

export function iif(condition: Rpc, whenTruthy: any, whenFalsy: any): Rpc {
  return {
    method: 'iif',
    params: [condition, whenTruthy, whenFalsy],
  };
}
