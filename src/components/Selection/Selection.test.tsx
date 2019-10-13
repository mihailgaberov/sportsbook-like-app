import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Selection from './Selection';

describe('Selection', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Selection name={'test'} price={1.23} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
