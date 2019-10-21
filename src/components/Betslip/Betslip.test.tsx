import * as React from "react";
import { render } from '@testing-library/react';
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
  return render(<Betslip />);
};

describe("Betslip", () => {
  it("renders without crashing", () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null);
  });
});
