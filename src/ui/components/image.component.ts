import { DefaultProps } from '../default-props';
import { Rpc } from '../rpc';
import { UiElement } from '../ui-element';

export function Image(props: ImageProps): UiElement {
  return {
    _type: 'Image',
    props,
  };
}

export interface ImageProps extends DefaultProps {
  src: string | Rpc;
  size?: string | number | Rpc;
  height?: string | number | Rpc;
  width?: string | number | Rpc;
  rounded?: boolean | Rpc;
}
