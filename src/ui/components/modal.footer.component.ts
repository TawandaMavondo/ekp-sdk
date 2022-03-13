import { DefaultProps } from '../default-props';
import { Rpc } from '../rpc';
import { UiElement } from '../ui-element';

export function ModalFooter(props: ModalFooterProps): UiElement {
  return {
    _type: 'ModalFooter',
    props,
  };
}

export interface ModalFooterProps extends DefaultProps {
  content?: string | Rpc;
  children?: UiElement[];
}
