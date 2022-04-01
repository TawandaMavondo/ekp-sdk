import { Rpc } from './types';

export function hideModal(modalId: string): Rpc {
  return {
    method: 'hideModal',
    params: [modalId],
  };
}
