import React from 'react';
import GenericHeader from "./GenericHeader";

export default {
    title: "Components/Headers/GenericHeader",
    component: GenericHeader,
    description: "The base generic header organism component.",
};


// create a template of how args map to rendering
const Template = (args) => <GenericHeader {...args} />;
Template.args = {
    hideOnScroll : true //  TODO assign real value here
};

export const generic_header = Template.bind({});
generic_header.args = {
    ...Template.args,
};
