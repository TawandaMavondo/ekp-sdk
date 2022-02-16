import { Rpc } from './rpc/types';

export function isBusy(collection: string): Rpc | string {
  return `$..busy[?(@.id=="${collection}")]`;
}
