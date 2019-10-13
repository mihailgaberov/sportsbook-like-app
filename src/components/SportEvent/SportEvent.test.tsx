import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SportEvent from './SportEvent';
import mockSportData from '../../mocks/sport-events';

describe('SportEvent', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SportEvent name={'test'} markets={mockSportData[0].markets} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
