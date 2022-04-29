import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import GenericMenuItem from "./GenericMenuItem";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("GenericMenuItem component", () => {
  it("should render correctly", () => {
    const wrapper = render(<GenericMenuItem  href="" name=""/>);
    expect(wrapper).toMatchSnapshot();
  });
});
