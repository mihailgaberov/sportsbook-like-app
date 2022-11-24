import * as React from 'react';
import SelectionCounter from './SelectionsCounter';
import { render } from '@testing-library/react';


const setup = () => {
  return render(<SelectionCounter />);
};


describe('SelectionCounter', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null);    
  });
});
