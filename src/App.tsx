import * as React from 'react';
import Betslip from "./components/Betslip";
import EventsList from "./components/EventsList";
import SportsAppBar from "./components/SportsAppBar";
import mockSportData from './mocks/sport-events';
import { normalizeEventsData } from "./utilities/common";


class App extends React.Component {
  public render() {
    return (
      <div>
        <SportsAppBar />
        <EventsList events={normalizeEventsData(mockSportData)} />
        <Betslip />
      </div>
    );
  }
}

export default App;
