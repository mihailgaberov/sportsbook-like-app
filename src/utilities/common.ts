export const normalizeEventsData = (rawData: IEventType[]) => {
  return rawData.filter((e: IEventType) => e.markets.length > 0)
};
