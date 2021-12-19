import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import GenericHeader from "./GenericHeader";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("GenericHeader component", () => {
  it("should render correctly", () => {
    const wrapper = render(<GenericHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
