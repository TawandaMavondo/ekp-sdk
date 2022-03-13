import { DefaultProps } from '../default-props';
import { Rpc } from '../rpc';
import { UiElement } from '../ui-element';

export function Datatable(props: DatatableProps): UiElement {
  return {
    _type: 'Datatable',
    props,
  };
}

export interface DatatableProps extends DefaultProps {
  columns: DatatableColumn[];
  data: any[] | Rpc;
  defaultSortAsc?: boolean | Rpc;
  defaultSortFieldId?: string | Rpc;
  filterable?: boolean | Rpc;
  gridView?: {
    tileWidth?: number[];
    tile: UiElement;
  };
  busyWhen?: boolean | string | Rpc;
  onRowClicked?: Rpc;
  pagination?: boolean | Rpc;
  paginationPerPage?: number | Rpc;
  showExport?: boolean | Rpc;
  showLastUpdated?: boolean | Rpc;
}

export interface DatatableColumn {
  cell?: UiElement;
  filterOptions?: string[] | Rpc;
  filterable?: boolean | Rpc;
  grow?: number | Rpc;
  id: string | Rpc;
  label?: string | Rpc;
  name?: string | Rpc;
  right?: boolean | Rpc;
  sortable?: boolean | Rpc;
  value?: number | string | Rpc;
  width?: string | Rpc;
}
