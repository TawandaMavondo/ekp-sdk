export type Rpc =
  | string
  | Readonly<{
      method: string;
      params?: ReadonlyArray<any>;
      target?: string;
    }>;

export type When =
  | Readonly<{
      not: boolean | Rpc;
    }>
  | boolean
  | Rpc;
