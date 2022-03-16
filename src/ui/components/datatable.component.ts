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
  busyWhen?: boolean | string | Rpc;
  columns: DatatableColumn[];
  data: any[] | Rpc;
  defaultSortAsc?: boolean;
  defaultSortFieldId?: string;
  defaultView?: 'grid' | 'column';
  dense?: boolean;
  disabled?: boolean;
  filterable?: boolean;
  gridView?: { tileWidth?: number[]; tile: UiElement };
  highlightOnHover?: boolean;
  pointerOnHover?: boolean;
  noTableHead?: boolean;
  onRowClicked?: Rpc;
  pagination?: boolean;
  paginationPerPage?: number;
  showExport?: boolean;
  showLastUpdated?: boolean;
  stripe?: boolean;
}

export interface DatatableColumn {
  cell?: UiElement;
  center?: boolean;
  compact?: boolean;
  filterOptions?: string[];
  filterable?: boolean;
  grow?: number;
  id: string;
  label?: string | Rpc;
  hide?: string | number;
  maxWidth?: string;
  minWidth?: string;
  name?: string;
  omit?: boolean;
  reorder?: boolean;
  right?: boolean;
  sortable?: boolean;
  value?: number | string | Rpc;
  width?: string;
  wrap?: boolean;
}
