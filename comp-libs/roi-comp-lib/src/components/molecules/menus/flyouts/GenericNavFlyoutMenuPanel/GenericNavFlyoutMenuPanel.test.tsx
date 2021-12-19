import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import GenericNavFlyoutMenuPanel from "./GenericNavFlyoutMenuPanel";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("GenericNavFlyoutMenuPanel component", () => {
  it("should render correctly", () => {
    const wrapper = render(<GenericNavFlyoutMenuPanel />);
    expect(wrapper).toMatchSnapshot();
  });
});
