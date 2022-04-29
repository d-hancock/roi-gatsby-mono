import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import GenericFlyoutMenuItem from "./GenericFlyoutMenuItem";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("GenericFlyoutMenuItem component", () => {
  it("should render correctly", () => {
    const wrapper = render(<GenericFlyoutMenuItem name={""} description={""} href={""} icon={undefined} />);
    expect(wrapper).toMatchSnapshot();
  });
});
