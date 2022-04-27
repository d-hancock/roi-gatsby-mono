import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import GenericMenuCallToActionItemList from "./GenericMenuCallToActionItemList";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("GenericMenuCallToActionItemList component", () => {
  it("should render correctly", () => {
    // @ts-ignore
    const wrapper = render(<GenericMenuCallToActionItemList />);
    expect(wrapper).toMatchSnapshot();
  });
});
