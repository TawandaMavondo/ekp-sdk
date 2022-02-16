import { TokenMetadata } from '../tokens/token-meta-data';
import { ChainId } from './chain-id';

export type ChainMetadata = Readonly<{
  explorer: string;
  id: ChainId;
  logo: string;
  name: string;
  swap: string;
  token: TokenMetadata;
}>;
