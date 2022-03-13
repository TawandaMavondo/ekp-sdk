import { Rpc } from './types';

export function showModal(modalId: string, state: string | Rpc): Rpc {
  return {
    method: 'showModal',
    params: [modalId, state],
  };
}
