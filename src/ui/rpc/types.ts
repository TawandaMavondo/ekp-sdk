export type RpcOrPrimitive =
  | Rpc
  | string
  | number
  | boolean
  | string[]
  | number[];

export type Rpc = Readonly<{
  method: string;
  params?: ReadonlyArray<any>;
}>;

export type When =
  | Readonly<{
      not: Rpc | string | boolean;
    }>
  | Rpc
  | string
  | boolean;
