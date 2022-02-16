import { LayerDto } from '../layers';

export const ADD_LAYERS = 'add-layers';

export type AddLayersEvent = Readonly<{
  clientId: string;
  layers: ReadonlyArray<LayerDto>;
}>;
