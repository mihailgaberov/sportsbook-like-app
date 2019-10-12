import * as React from 'react';
import './App.css';
import Betslip from "./components/Betslip/Betslip";


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Betslip />
      </div>
    );
  }
}

export default App;
