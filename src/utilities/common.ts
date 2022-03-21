import {
  deleteRecord,
  readRecord,
  storeToLocalStorage
} from "./localStorageService";

export const normalizeEventsData = (rawData: IEventType[]) => {
  return rawData.filter((e: IEventType) => e.markets.length > 0);
};

export const fakeBet = (context: any, event: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const eventData = event.data;

      console.log(">>>", eventData);
      console.log("readRecord(eventData.id): ", readRecord(eventData.id));

      if (readRecord(eventData.id)) {
        deleteRecord(eventData.id);
        return reject();
      }

      storeToLocalStorage(eventData.id, JSON.stringify(eventData));

      return resolve(eventData);
    }, 1000);
  });
};
