import { CurrencyDto } from './currency.dto';

export type ClientStateDto = Readonly<{
  forms?: Readonly<Record<string, any>>;
  client: Readonly<{
    path: string;
    hiddenChains: string[];
    selectedCurrency: CurrencyDto;
    watchedWallets: ReadonlyArray<WatchedWalletDto>;
  }>;
}>;

type WatchedWalletDto = Readonly<{ address: string; hidden: boolean }>;
