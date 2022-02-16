import { RpcOrPrimitive, When } from './rpc/types';

export type DefaultProps = Readonly<{
  className?: string;
  context?: RpcOrPrimitive;
  when?: When;
  tooltip?: RpcOrPrimitive;
}>;
