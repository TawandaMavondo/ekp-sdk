import { DefaultProps } from '../default-props';
import { Rpc } from '../rpc';
import { UiElement } from '../ui-element';

export function Select(props: SelectProps): UiElement {
  return {
    _type: 'Select',
    props,
  };
}

export interface SelectProps extends DefaultProps {
  isClearable?: boolean | Rpc;
  label?: string | Rpc;
  name: string;
  options: (string | Rpc)[];
  width?: number | string | Rpc;
  minWidth?: number | string | Rpc;
  maxWidth?: number | string | Rpc;
}
