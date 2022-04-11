import { LayerDto } from '../layers';

export const ADD_LAYERS = 'add-layers';

export type AddLayersEvent = Readonly<{
  clientId: string;
  originalEvent: {
    sent: number;
    gameId: string;
    path: string;
  };
  layers: ReadonlyArray<LayerDto>;
}>;
