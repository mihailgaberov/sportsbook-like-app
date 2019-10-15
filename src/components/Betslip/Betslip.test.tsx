import * as React from 'react';

import { shallow } from 'enzyme';
import Betslip from './Betslip';

const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key: string | number) => store[key],
    setItem: (key: string | number, value: { toString: () => void; }) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string | number) => {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const setup = () => {
  return shallow(<Betslip removeSelectionCallback={jest.fn} />)
};

describe('Betslip', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null);
  });
});
