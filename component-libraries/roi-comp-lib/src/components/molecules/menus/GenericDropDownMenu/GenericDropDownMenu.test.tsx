import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import GenericDropDownMenu from "./GenericDropDownMenu";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("GenericDropDownMenu component", () => {
  it("should render correctly", () => {
    const wrapper = render(<GenericDropDownMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
