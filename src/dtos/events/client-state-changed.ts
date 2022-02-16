import { ClientStateDto } from '../state';

export const CLIENT_STATE_CHANGED = 'client-state-changed';

export type ClientStateChangedEvent = Readonly<{
  clientId: string;
  received: number;
  state: ClientStateDto;
}>;
