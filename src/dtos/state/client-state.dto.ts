import { CurrencyDto } from './currency.dto';

export type ClientStateDto = Readonly<{
  forms?: Readonly<Record<string, any>>;
  client: Readonly<{
    gameId: string;
    path: string;
    queryParams: Record<string, string>;
    hiddenChains: string[];
    selectedCurrency: CurrencyDto;
    watchedWallets: ReadonlyArray<WatchedWalletDto>;
    subscribed: boolean;
  }>;
}>;

type WatchedWalletDto = Readonly<{ address: string; hidden: boolean }>;
