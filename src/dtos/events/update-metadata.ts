export const UPDATE_METADATA = 'update-metadata';

export type UpdateMetadataEvent = Readonly<{
  clientId: string;
  pluginId: string;
  pluginName: string;
}>;
