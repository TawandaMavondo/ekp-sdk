import { DefaultProps } from '../default-props';
import { Rpc, RpcOrPrimitive } from '../rpc';
import { UiElement } from '../ui-element';

export function Image(props: ImageProps): UiElement {
  return {
    _type: 'Image',
    props,
  };
}

export interface ImageProps extends DefaultProps {
  src: UiElement | RpcOrPrimitive;
  size?: UiElement | RpcOrPrimitive;
  rounded?: Rpc | boolean;
}
