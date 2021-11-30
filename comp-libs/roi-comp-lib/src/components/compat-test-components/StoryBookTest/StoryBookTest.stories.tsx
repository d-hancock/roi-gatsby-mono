import React from 'react';
import { StoryBookTest, StoryBookTestProps } from "./StoryBookTest"// @ts-ignore

// @ts-ignore
export default {
    title: "Components/StoryBookTest",
    component: StoryBookTest,
    description: "Story book test component.",
};


// create a template of how args map to rendering
const Template = (args: StoryBookTestProps) => <StoryBookTest {...args} />;
Template.args = {
    test : "test" //  TODO assign real value here
};

export const story_book_test = Template.bind({});
story_book_test.args = {
    ...Template.args,
};
