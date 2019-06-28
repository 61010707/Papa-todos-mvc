import React from "react";
import { shallow } from "enzyme";
import App from "../../src/components/App.js";

describe("App", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
