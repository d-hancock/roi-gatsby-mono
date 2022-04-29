import React from 'react';
import TwinTestComp from "./TwinTestComp";

export default {
    title: "TestComponents/TwinTestComp",
    component: TwinTestComp,
    description: "Twin test comp component.",
};


// create a template of how args map to rendering
const Template = (args) => <TwinTestComp {...args} />;
Template.args = {
    test : "hey"  //  TODO assign real value here
};

export const twin_test_comp = Template.bind({});
twin_test_comp.args = {
    ...Template.args,
};
