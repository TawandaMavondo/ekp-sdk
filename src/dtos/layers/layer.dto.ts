export type LayerDto = Readonly<
  {
    collectionName: string;
    id: string;
    tags?: string[];
    timestamp?: number;
  } & (PatchLayer | SetLayer)
>;

type PatchLayer = Readonly<{ patch: ReadonlyArray<any> }>;
type SetLayer = Readonly<{ set: ReadonlyArray<any> }>;
