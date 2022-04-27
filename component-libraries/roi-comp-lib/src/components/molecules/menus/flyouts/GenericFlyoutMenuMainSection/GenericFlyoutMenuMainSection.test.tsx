import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import GenericFlyoutMenuMainSection from "./GenericFlyoutMenuMainSection";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("GenericFlyoutMenuMainSection component", () => {
  it("should render correctly", () => {
    // @ts-ignore
    const wrapper = render(<GenericFlyoutMenuMainSection mainSectionData={undefined} />);
    expect(wrapper).toMatchSnapshot();
  });
});
