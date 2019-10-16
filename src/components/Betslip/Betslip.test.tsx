import { Drawer } from '@material-ui/core';
import { shallow } from "enzyme";
import * as React from "react";
import Betslip from "./Betslip";


const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key: string | number) => store[key],
    setItem: (key: string | number, value: { toString: () => void }) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string | number) => {
      delete store[key];
    },
    readAllFromStorage: () => [
      { id: "SEL_1", name: "Man Utd to WIN", price: 1.23 }
    ]
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

const setup = () => {
  return shallow(<Betslip removeSelectionCallback={jest.fn} />);
};

describe("Betslip", () => {
  it("renders without crashing", () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null);
  });

  it("should be able to render drawer", () => {
    const wrapper = setup();
    expect(wrapper.find(Drawer).length).toBe(1);
  });
});
