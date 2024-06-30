import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Rate from "./Rate";

export default {
  title: "Rate",
  component: Rate,
} as ComponentMeta<typeof Rate>;

const Template: ComponentStory<typeof Rate> = (args) => <Rate {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialRating: 3,
  onRatingChange: (rating: number) =>
    console.log(`Rating changed to: ${rating}`),
};

export const FiveStarRating = Template.bind({});
FiveStarRating.args = {
  initialRating: 5,
  onRatingChange: (rating: number) =>
    console.log(`Rating changed to: ${rating}`),
};

export const OneStarRating = Template.bind({});
OneStarRating.args = {
  initialRating: 1,
  onRatingChange: (rating: number) =>
    console.log(`Rating changed to: ${rating}`),
};
