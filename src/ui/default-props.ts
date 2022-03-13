import { Rpc, When } from './rpc/types';

export type DefaultProps = Readonly<{
  className?: string | Rpc;
  context?: string | Rpc;
  when?: When;
  tooltip?: string | Rpc;
}>;
