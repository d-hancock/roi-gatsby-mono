import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import TwinTestComp from "./TwinTestComp";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("TwinTestComp component", () => {
  it("should render correctly", () => {
    const wrapper = render(<TwinTestComp />);
    expect(wrapper).toMatchSnapshot();
  });
});
