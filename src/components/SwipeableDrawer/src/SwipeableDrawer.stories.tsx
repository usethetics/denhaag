import React from 'react';
import { Meta, Story } from '@storybook/react';
import SwipeableDrawer, { SwipeableDrawerProps } from '.';
import Button from '../../Button';
import pkg from '../package.json';

export default {
  title: 'Components/Navigation/SwipeableDrawer',
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
  component: SwipeableDrawer,
} as Meta;

const Template: Story<SwipeableDrawerProps> = (args: SwipeableDrawerProps) => {
  const [state, setState] = React.useState({
    open: args.open,
  });

  const toggleDrawer = (open: boolean) => {
    setState({ open: open });
  };

  return (
    <div>
      <Button onClick={() => toggleDrawer(true)}>Open Menu</Button>
      <SwipeableDrawer {...args} open={Boolean(state.open)} onClose={() => toggleDrawer(false)}>
        <p>This Drawer is swipeable, drag it to hide it.</p>
        <Button>Push me or swipe me on a phone!</Button>
      </SwipeableDrawer>
    </div>
  );
};

/**
 * Implementation of SwipeableDrawer
 */
export const Default = Template.bind({});
Default.args = {
  open: false,
};
