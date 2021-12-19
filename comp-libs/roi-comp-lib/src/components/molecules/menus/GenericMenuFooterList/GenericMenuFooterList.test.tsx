import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import GenericMenuFooterList from "./GenericMenuFooterList";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("GenericMenuFooterList component", () => {
  it("should render correctly", () => {
    const wrapper = render(<GenericMenuFooterList />);
    expect(wrapper).toMatchSnapshot();
  });
});
