import { DefaultProps } from '../default-props';
import { UiElement } from '../ui-element';

export function ModalBody(props: ModalBodyProps): UiElement {
  return {
    _type: 'ModalBody',
    props,
  };
}

export interface ModalBodyProps extends DefaultProps {
  children: UiElement[];
}
