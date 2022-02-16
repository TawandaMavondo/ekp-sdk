export const CLIENT_DISCONNECTED = 'client-disconnected';

export type ClientDisconnectedEvent = Readonly<{
  clientId: string;
}>;
