import { DefaultProps } from '../default-props';
import { Rpc } from '../rpc';
import { UiElement } from '../ui-element';

export function ModalHeader(props: ModalHeaderProps): UiElement {
  return {
    _type: 'ModalHeader',
    props,
  };
}

export interface ModalHeaderProps extends DefaultProps {
  content?: string | Rpc;
  children?: UiElement[];
}
