import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EventsList from './EventsList';
import mockSportData from '../../mocks/sport-events';

describe('EventsList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EventsList events={mockSportData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
