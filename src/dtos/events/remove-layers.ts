import { LayerQueryDto } from '../layers';

export const REMOVE_LAYERS = 'remove-layers';

export type RemoveLayersEvent = Readonly<{
  clientId: string;
  originalEvent: {
    sent: number;
    gameId: string;
    path: string;
  };
  query: LayerQueryDto;
}>;
