import { Rpc } from './types';

export function removeFormRecord(
  formName: string,
  formField: string | Rpc,
  whereFieldValue: string | Rpc,
): Rpc {
  return {
    method: 'removeFormRecord',
    params: [formName, formField, whereFieldValue],
  };
}
