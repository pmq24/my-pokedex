import type { Meta, StoryFn } from '@storybook/react';
import TypeList, { type Props } from '../app/components/type-list';

export default {
  title: 'TypeList',
  component: TypeList,
} as Meta;

const Template: StoryFn<Props> = (args) => <TypeList {...args} />;

export const Example = Template.bind({});
Example.args = {
  types: ['normal', 'fire'],
};

export const OverflowOneLine = Template.bind({});
OverflowOneLine.args = {
  types: [
    'normal',
    'fire',
    'water',
    'bug',
    'dark',
    'flying',
    'ice',
    'grass',
    'ground',
  ],
};
