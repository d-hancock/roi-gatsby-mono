import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import { StoryBookTest } from "./StoryBookTest"

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("StoryBookTest component", () => {
  it("should render correctly", () => {
    const wrapper = render(<StoryBookTest />);
    expect(wrapper).toMatchSnapshot();
  });
});
