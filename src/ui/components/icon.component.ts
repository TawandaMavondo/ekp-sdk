import { DefaultProps } from '../default-props';
import { Rpc } from '../rpc';
import { UiElement } from '../ui-element';

export function Icon(props: IconProps): UiElement {
  return {
    _type: 'Icon',
    props: props ?? {},
  };
}

export interface IconProps extends DefaultProps {
  name: string | Rpc;
  size?:
    | 'sm'
    | 'lg'
    | 'xl'
    | 'xxl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
    | Rpc;
}
