import { DefaultProps } from '../default-props';
import { Rpc } from '../rpc';
import { UiElement } from '../ui-element';

export function Table(props: TableProps): UiElement {
  return {
    _type: 'Table',
    props,
  };
}

export interface TableProps extends DefaultProps {
  header?: (string | Rpc)[];
  body: (string | number | Rpc | UiElement)[][];
  widths?: string[];
}
