import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import HeaderBase from "./HeaderBase";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("HeaderBase component", () => {
  it("should render correctly", () => {
    const variant: string = null; // TODO assign real value

    const wrapper = render(<HeaderBase variant={variant} />);
    expect(wrapper).toMatchSnapshot();
  });
});
