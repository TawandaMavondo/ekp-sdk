export type LayerQueryDto = Readonly<
  QueryByCollectionName | QueryById | QueryByTags | QueryByTimestamp
>;

type QueryByCollectionName = { collectionName: string };
type QueryById = { id: string };
type QueryByTags = { tags: string[] };
type QueryByTimestamp = { timestamp: TimestampCondition };

type TimestampCondition = Readonly<{
  eq?: number;
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
}>;
