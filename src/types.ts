/** The response type of the API call */
// type ResponseType = EventsType[];

interface IEventType {
  id: string;
  name: string;
  markets: IMarketType[];
}

interface IMarketType {
  id: string;
  name: string;
  selections: ISelectionType[];
}

interface ISelectionType {
  id: string;
  name: string;
  price: number;
}
