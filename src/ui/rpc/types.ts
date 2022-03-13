export type Rpc =
  | string
  | Readonly<{
      method: string;
      params?: ReadonlyArray<any>;
    }>;

export type When =
  | Readonly<{
      not: boolean | Rpc;
    }>
  | boolean
  | Rpc;
