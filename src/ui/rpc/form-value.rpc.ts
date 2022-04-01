import { Rpc } from './types';

export function formValue(formName: string, fieldName: string): Rpc {
  return {
    method: 'formValue',
    params: [formName, fieldName],
  };
}
