import * as React from 'react';

import { shallow } from 'enzyme';
import Betslip from './Betslip';

var localStorageMock = (function() {
  var store = {};
  return {
    getItem: function(key: string | number) {
      return store[key];
    },
    setItem: function(key: string | number, value: { toString: () => void; }) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key: string | number) {
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
