import { DefaultProps } from '../default-props';
import { RpcOrPrimitive } from '../rpc';
import { UiElement } from '../ui-element';

export function Table(props: TableProps): UiElement {
  return {
    _type: 'Table',
    props,
  };
}

export interface TableProps extends DefaultProps {
  header?: RpcOrPrimitive[];
  body: RpcOrPrimitive[][];
}
