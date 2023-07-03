import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Chart from '../components/chart/Chart';
import { data } from '../utils/data';

export default {
  title: "Example/Chart",
  component: Chart,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Chart>;

const Template: StoryFn<typeof  Chart> = args => <  Chart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: '  Economic Simulator',
  labels : [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ],
  data:data
};


