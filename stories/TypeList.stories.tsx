import type { Meta, StoryFn } from '@storybook/react';
import TypeList, { type Props } from '../app/components/type-list';

export default {
  title: 'TypeList',
  component: TypeList,
  parameters: {
    docs: {
      description: {
        component:
          'Displays a list of types of a Pokemon (For example: Fire, Water, Dragon)',
      },
    },
  },
  argTypes: {
    types: {
      description:
        'Types to be displayed. Must be a combination of `normal`, `fire`, `water`, `grass`, `electric`, `ice`, `fighting`, `poison`, `ground`, `flying`, `psychic`, `bug`, `rock`, `ghost`, `dark`, `dragon`, `steel`, `fairy`',
    },
  },
} as Meta;

const Template: StoryFn<Props> = (args) => <TypeList {...args} />;

export const Example = Template.bind({});
Example.args = {
  types: ['normal', 'fire'],
};

export const ALotOfTypes = Template.bind({});
ALotOfTypes.parameters = {
  docs: {
    description: {
      story:
        'Displays a lot of types. Try smaller screen size to see the wrapping effect.',
    },
  },
};
ALotOfTypes.args = {
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

export const UnknownType = Template.bind({});
UnknownType.args = {};
