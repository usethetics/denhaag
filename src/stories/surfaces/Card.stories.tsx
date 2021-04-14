import React from "react";
import { Meta, Story } from "@storybook/react";
import Card, { CardProps } from "../../components/Card";
import pkg from "../../components/Card/package.json";

export default {
  title: "Components/Surfaces/Card",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: Card
} as Meta;

const Template: Story<CardProps> = (args: unknown) => (
  <Card {...args} />
);

/**
 * Implementation of Card
 */
export const Default = Template.bind({});

/**
 * Case variant of Card component
 */
export const Case = Template.bind({});
Case.args = {
  variant: "case"
};
