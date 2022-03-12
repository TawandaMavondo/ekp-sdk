import { Rpc } from '..';
import { DefaultProps } from '../default-props';
import { UiElement } from '../ui-element';

export function GridTile(props: GridTileProps) {
  return {
    _type: 'GridTile',
    props,
  };
}

export interface GridTileProps extends DefaultProps {
  readonly image?: UiElement;
  readonly title?: string | Rpc;
  readonly left?: {
    readonly icon?: string;
    readonly content?: string | Rpc;
  };
  readonly middle?: {
    readonly icon?: string;
    readonly content?: string | Rpc;
  };
  readonly right?: {
    readonly icon?: string;
    readonly content?: string | Rpc;
  };
  readonly details?: {
    readonly label: string;
    readonly value: string | Rpc;
  }[];
}
