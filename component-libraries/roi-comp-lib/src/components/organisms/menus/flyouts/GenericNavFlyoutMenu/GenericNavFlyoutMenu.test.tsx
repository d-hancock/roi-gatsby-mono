import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import GenericNavFlyoutMenu from "./GenericNavFlyoutMenu";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("GenericNavFlyoutMenu component", () => {
  it("should render correctly", () => {
    const wrapper = render(<GenericNavFlyoutMenu buttonLabel={""} menuListData={[]} ctaListData={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
