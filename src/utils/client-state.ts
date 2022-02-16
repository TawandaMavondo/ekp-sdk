import { validate } from 'bycontract';
import _ from 'lodash';
import { ClientStateChangedEvent } from '../dtos/events/client-state-changed';
import { chains } from './chains';
import { ChainMetadata } from './chains/chain-metadata';

export function filterPath(event: ClientStateChangedEvent, path: string) {
  return event.state?.client?.path === path;
}

export function parseClientAddresses(event: ClientStateChangedEvent) {
  validate(event, 'object');

  const watchedWallets = event.state.client.watchedWallets;

  if (!Array.isArray(watchedWallets)) {
    return [];
  }

  return watchedWallets
    .map((wallet) => wallet.address)
    .filter((address) => !!address);
}

export function parseCurrency(event: ClientStateChangedEvent) {
  validate(event, 'object');

  return event.state?.client?.selectedCurrency;
}

export function parseSelectedChains(
  event: ClientStateChangedEvent,
): ChainMetadata[] {
  validate(event, 'object');

  if (!Array.isArray(event.state?.client?.hiddenChains)) {
    return Object.values(chains);
  }

  return _.chain(chains)
    .values()
    .filter((chain) => !event.state.client.hiddenChains.includes(chain.id))
    .value();
}

export function parseSelectedWalletAddresses(
  event: ClientStateChangedEvent,
): string[] {
  validate(event, 'object');

  if (!Array.isArray(event.state?.client?.watchedWallets)) {
    return [];
  }

  return _.chain(event.state?.client?.watchedWallets)
    .filter((wallet) => wallet.hidden !== true)
    .map((wallet) => wallet.address)
    .value();
}
