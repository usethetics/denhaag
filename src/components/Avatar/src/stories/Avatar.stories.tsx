import React from 'react';
import { Meta, Story } from '@storybook/react';
import Avatar, { AvatarProps } from '..';
import pkg from '../../package.json';

export default {
  title: 'Components/Data Display/Avatar/Avatar',
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
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args: AvatarProps) => <Avatar {...args} />;

/**
 * Implementation of Avatar
 */
export const Default = Template.bind({});
Default.args = {
  src: 'https://c1.staticflickr.com/9/8486/8245351490_2746ef972c_b.jpg',
  alt: 'Planet Earth',
};

/**
 * Implementation of Avatar using a Letter
 */
export const Letter = Template.bind({});
Letter.args = {
  children: 'DH',
};

/**
 * Implementation of Avatar using squared edges.
 */
export const Squared = Template.bind({});
Squared.args = {
  ...Default.args,
  variant: 'square',
};
