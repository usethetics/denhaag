import React from 'react';
import { Meta, Story } from '@storybook/react';
import Container, { ContainerProps } from '.';
import pkg from '../package.json';

export default {
  title: 'Components/Layout/Container',
  component: Container,
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} as Meta;

const Template: Story<ContainerProps> = (args: ContainerProps) => <Container {...args}>This is a container.</Container>;

/**
 * Default Container
 */
export const Default = Template.bind({});

/**
 * Container without left and right padding.
 */
export const NoPadding = Template.bind({});
NoPadding.args = {
  disableGutters: true,
};

/**
 * Container with width fixed to min-width of the breakpoint.
 */
export const FixedWidth = Template.bind({});
FixedWidth.args = {
  fixed: true,
};
