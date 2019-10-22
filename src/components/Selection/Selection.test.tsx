import { render } from "@testing-library/react";
import * as React from "react";
import mockSportData from "../../__mocks__/sport-events";
import Selection from "./Selection";

jest.mock("../../utilities/localStorageService");

const setup = () => {
  return render(<Selection data={mockSportData[0].markets[0].selections[0]} />);
};

describe("Selection", () => {
  it("renders without crashing", () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});
