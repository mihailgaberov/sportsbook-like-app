import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Selection from './Selection';
import mockSportData from '../../mocks/sport-events';

describe('Selection', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Selection data={mockSportData[0].markets[0].selections[0]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
