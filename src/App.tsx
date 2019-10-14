import * as React from 'react';
import Betslip from './components/Betslip';
import EventsList from './components/EventsList';
import SportsAppBar from './components/SportsAppBar';
import { normalizeEventsData } from './utilities/common';
import { sportsDataMachine } from './state-machines/sports-data-machine';
import { useMachine } from '@xstate/react';


export default function App() {
  const [current, , sdm] = useMachine(sportsDataMachine);
  const sportsData = [];

  if (current.value === 'success') {
    // @ts-ignore
    sportsData = current.context.data;
  }

  sdm.start().send('FETCH');

  return <div>
    <SportsAppBar />
    <EventsList events={normalizeEventsData(sportsData)} />
    <Betslip />
  </div>
}
