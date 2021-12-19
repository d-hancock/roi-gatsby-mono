import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import GenericNavMenuList from "./GenericNavMenuList";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("GenericNavMenuList component", () => {
  it("should render correctly", () => {
    const wrapper = render(<GenericNavMenuList />);
    expect(wrapper).toMatchSnapshot();
  });
});
