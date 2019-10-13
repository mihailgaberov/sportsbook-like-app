import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SportsAppBar from './SportsAppBar';

describe('SportsAppBar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SportsAppBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
