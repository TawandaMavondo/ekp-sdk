import { ChainId } from '../chains/chain-id';

export type TokenMetadata = Readonly<{
  address: string;
  chainId?: ChainId;
  coinId?: string;
  decimals: number;
  logo?: string;
  name: string;
  symbol: string;
}>;
