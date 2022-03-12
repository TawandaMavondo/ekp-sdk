import { DefaultProps } from '../default-props';
import { Rpc } from '../rpc';
import { UiElement } from '../ui-element';

export function Button(props?: ButtonProps): UiElement {
  return {
    _type: 'Button',
    props,
  };
}

export type ButtonProps = DefaultProps &
  Readonly<{
    busyWhen?: string | Rpc;
    content?: UiElement;
    icon?: string | Rpc;
    isSubmit?: boolean;
    label?: string | Rpc;
    onClick?: Rpc;
    outline?: boolean | Rpc;
  }>;
