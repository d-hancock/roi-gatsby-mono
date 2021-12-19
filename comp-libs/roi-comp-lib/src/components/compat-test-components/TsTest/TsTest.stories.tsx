import React from 'react';
import TsTest from "./TsTest";

export default {
    title: "TestComponents/TsTest",
    component: TsTest,
    description: "Ts test component.",
};

// export const ts_test = () => <TsTest />;

// create a template of how args map to rendering
const Template = (args) => <TsTest {...args} />;
Template.args = {
};

export const ts_test = Template.bind({});
ts_test.args = {
    ...Template.args,
};
