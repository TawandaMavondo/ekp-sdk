import { DefaultProps } from '../default-props';
import { Rpc } from '../rpc';
import { UiElement } from '../ui-element';

export function Button(props?: ButtonProps): UiElement {
  return {
    _type: 'Button',
    props,
  };
}

export interface ButtonProps extends DefaultProps {
  label: string | Rpc;
  isSubmit?: boolean;
  isBusy?: boolean | string | Rpc;
}
