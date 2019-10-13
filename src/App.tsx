import * as React from 'react';
import Betslip from "./components/Betslip";
import EventsList from "./components/EventsList";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <EventsList />
        <Betslip />
      </div>
    );
  }
}

export default App;
