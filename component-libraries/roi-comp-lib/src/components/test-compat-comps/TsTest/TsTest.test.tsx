import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import TsTest from "./TsTest";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("TsTest component", () => {
  it("should render correctly", () => {
    const wrapper = render(<TsTest />);
    expect(wrapper).toMatchSnapshot();
  });
});
