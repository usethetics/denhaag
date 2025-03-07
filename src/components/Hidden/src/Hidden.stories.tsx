import React from 'react';
import { Meta, Story } from '@storybook/react';
import Hidden, { HiddenProps } from '.';
import pkg from '../package.json';

export default {
  title: 'Components/Layout/Hidden',
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
  component: Hidden,
} as Meta;

const Template: Story<HiddenProps> = (args: HiddenProps) => (
  <Hidden {...args}>
    <p>
      This text can be hidden. Set different &quot;Up&quot; and &quot;Down&quot; properties to <code>true</code> to hide
      this text based on screen sizes.
    </p>
  </Hidden>
);

/**
 * Default Hidden
 */
export const Default = Template.bind({});
