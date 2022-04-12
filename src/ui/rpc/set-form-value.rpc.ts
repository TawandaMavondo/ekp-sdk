import { Rpc } from './types';

export function setFormValue(
  formName: string,
  formField: string | Rpc,
  value: number | boolean | string | Rpc,
): Rpc {
  return {
    method: 'setFormValue',
    params: [formName, formField, value],
  };
}
