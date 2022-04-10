import { DefaultProps } from '../default-props';
import { Rpc } from '../rpc';
import { UiElement } from '../ui-element';

export function Badge(props?: BadgeProps): UiElement {
  return {
    _type: 'Badge',
    props,
  };
}

export interface BadgeProps extends DefaultProps {
  color: string | Rpc;
  children: UiElement[];
}
