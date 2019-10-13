import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Betslip from './Betslip';

describe('Betslip', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Betslip />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
