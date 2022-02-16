export const CLIENT_CONNECTED = 'client-connected';

export type ClientConnectedEvent = Readonly<{
  clientId: string;
}>;
