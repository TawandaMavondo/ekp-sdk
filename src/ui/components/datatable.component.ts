import { DefaultProps } from '../default-props';
import { Rpc, RpcOrPrimitive } from '../rpc';
import { UiElement } from '../ui-element';

export function Datatable(props: DatatableProps): UiElement {
  return {
    _type: 'Datatable',
    props,
  };
}

export interface DatatableProps extends DefaultProps {
  columns: DatatableColumn[];
  data: RpcOrPrimitive;
  defaultSortAsc?: RpcOrPrimitive;
  defaultSortFieldId?: RpcOrPrimitive;
  filterable?: RpcOrPrimitive;
  gridView?: {
    tileWidth?: number[];
    tile: UiElement;
  };
  isBusy?: string | Rpc;
  onRowClicked?: Rpc;
  pagination?: RpcOrPrimitive;
  paginationPerPage?: RpcOrPrimitive;
}

export interface DatatableColumn {
  cell?: UiElement;
  filterable?: RpcOrPrimitive;
  filterOptions?: RpcOrPrimitive;
  grow?: Rpc | number;
  id: RpcOrPrimitive;
  label?: Rpc | string;
  name?: RpcOrPrimitive;
  right?: RpcOrPrimitive;
  sortable?: RpcOrPrimitive;
  value?: RpcOrPrimitive;
  width?: Rpc | number | string;
}
