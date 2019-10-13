import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Market from './Market';
import mockSportData from '../../mocks/sport-events';

describe('Market', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Market name={'test'} selections={mockSportData[0].markets[0].selections} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
