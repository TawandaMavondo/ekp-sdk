import { DefaultProps } from '../default-props';
import { Rpc } from '../rpc';
import { UiElement } from '../ui-element';

export function Input(props: InputProps): UiElement {
  return {
    _type: 'Input',
    props,
  };
}

export interface InputProps extends DefaultProps {
  label?: string | Rpc;
  name: string;
}
