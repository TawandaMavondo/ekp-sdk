import { LayerQueryDto } from '../layers';

export const REMOVE_LAYERS = 'remove-layers';

export type RemoveLayersEvent = Readonly<{
  readonly clientId: string;
  readonly query: LayerQueryDto;
}>;
