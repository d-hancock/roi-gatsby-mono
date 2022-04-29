import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import GenericMenuItemList from "./GenericMenuItemList";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("GenericMenuItemList component", () => {
  it("should render correctly", () => {
    const wrapper = render(<GenericMenuItemList itemListData={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
