import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import GenericFlyoutMenuMainSection from "./GenericFlyoutMenuMainSection";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("GenericFlyoutMenuMainSection component", () => {
  it("should render correctly", () => {
    const wrapper = render(<GenericFlyoutMenuMainSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
