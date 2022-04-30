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
  height?: string | number | Rpc;
  rounded?: boolean | Rpc;
  size?: string | number | Rpc;
  src: string | Rpc;
  width?: string | number | Rpc;
}
