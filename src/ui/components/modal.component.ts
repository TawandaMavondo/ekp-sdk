import { DefaultProps } from '../default-props';
import { Rpc } from '../rpc';
import { UiElement } from '../ui-element';

export function Modal(props: ModalProps): UiElement {
  return {
    _type: 'Modal',
    props,
  };
}

export interface ModalProps extends DefaultProps {
  id: string;
  backdrop?: boolean | Rpc;
  backdropClassName?: string | Rpc;
  centered?: boolean | Rpc;
  children: UiElement[];
  contentClassName?: string | Rpc;
  fade?: boolean | Rpc;
  header?: string | UiElement | Rpc;
  modalClassName?: string | Rpc;
  scrollable?: boolean | Rpc;
  size?: string | Rpc;
  wrapClassName?: string | Rpc;
}
