import * as React from "react";
import Betslip from "./components/Betslip";
import EventsList from "./components/EventsList";
import SportsAppBar from "./components/SportsAppBar";
import { normalizeEventsData } from "./utilities/common";
import { sportsDataMachine } from "./state-machines/sports-data-machine";
import { useMachine } from "@xstate/react";
import SelectionsCounter from "./components/SelectionsCounter/SelectionsCounter";
import { clearAll } from "./utilities/localStorageService";

export default function App() {
  React.useEffect(() => {
    clearAll();
  }, []);
  const [current, , sdm] = useMachine(sportsDataMachine);
  let sportsData = [];

  if (current.value === "success") {
    // @ts-ignore
    sportsData = current.context.data;
  }

  sdm.start().send("FETCH");

  return (
    <div>
      <SportsAppBar />
      <SelectionsCounter />
      <EventsList events={normalizeEventsData(sportsData)} />
      <Betslip />
    </div>
  );
}
