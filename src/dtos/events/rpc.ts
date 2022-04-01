import { Rpc } from '../../ui';

export const RPC = 'client-rpc';

export type RpcEvent = Readonly<{
  clientId: string;
  received: number;
  rpc: Rpc;
}>;
