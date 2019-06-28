import React from "react";
import { shallow, mount } from "enzyme";
import App from "../../src/containers/App.js";

describe("App", () => {
  it("should have TodoStoreProvider", () => {
    const component = shallow(<App />);
    expect(component.find("TodoStoreProvider").exists()).toBe(true);
  });

  it("should render correctly with no props", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });

  it("should have css app todoapp", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("div.App todoapp"));
  });
});
