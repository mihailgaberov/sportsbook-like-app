import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EventsList from './EventsList';

describe('EventsList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EventsList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
