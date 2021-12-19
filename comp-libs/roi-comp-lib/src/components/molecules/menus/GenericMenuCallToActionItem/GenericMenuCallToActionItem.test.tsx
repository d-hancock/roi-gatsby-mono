import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import GenericMenuCallToActionItem from "./GenericMenuCallToActionItem";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("GenericMenuCallToActionItem component", () => {
  it("should render correctly", () => {
    const wrapper = render(<GenericMenuCallToActionItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
