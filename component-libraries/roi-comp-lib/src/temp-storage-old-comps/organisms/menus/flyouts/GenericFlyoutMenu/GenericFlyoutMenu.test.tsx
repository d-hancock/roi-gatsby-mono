import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import GenericFlyoutMenu from "./GenericFlyoutMenu";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("GenericFlyoutMenu component", () => {
  it("should render correctly", () => {
    const wrapper = render(<GenericFlyoutMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
