import { Rpc } from './types';

export function formatTemplate(
  value: string | Rpc,
  scope: Record<string, any>,
): Rpc {
  return {
    method: 'formatTemplate',
    params: [value, scope],
  };
}
