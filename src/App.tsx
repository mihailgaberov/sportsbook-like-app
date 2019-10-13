import * as React from 'react';
import Betslip from "./components/Betslip";
import EventsList from "./components/EventsList";
import SportsAppBar from "./components/SportsAppBar";

class App extends React.Component {
  public render() {
    return (
      <div>
        <SportsAppBar />
        <EventsList />
        <Betslip />
      </div>
    );
  }
}

export default App;
