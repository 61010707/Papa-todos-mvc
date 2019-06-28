import React from "react";
import { shallow } from "enzyme";
import App from "../../src/components/App.js";

describe("App", () => {
  const component = shallow(<App />);
  it("should render correctly with no props", () => {
    expect(component).toMatchSnapshot();
  });

  it("should contain App todoapp", () => {
    expect(
      shallow(<App />)
        .find("h1")
        .exists()
    ).toBe(true);
  });
});
