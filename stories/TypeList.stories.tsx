import type { Meta, StoryFn } from '@storybook/react';
import TypeChips, { type Props } from '../app/components/type-chips';

export default {
  title: 'TypeList',
  component: TypeChips,
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

const Template: StoryFn<Props> = (args) => <TypeChips {...args} />;

export const Example = Template.bind({});
Example.args = {
  types: [
    {
      slot: 1,
      type: {
        name: 'normal',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },
  ],
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
    {
      slot: 1,
      type: {
        name: 'normal',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },
    {
      slot: 1,
      type: {
        name: 'fire',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },
    {
      slot: 1,
      type: {
        name: 'ice',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },
    {
      slot: 1,
      type: {
        name: 'water',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },
    {
      slot: 1,
      type: {
        name: 'ice',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },
    {
      slot: 1,
      type: {
        name: 'rock',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },
    {
      slot: 1,
      type: {
        name: 'normal',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },
    {
      slot: 1,
      type: {
        name: 'fire',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },

    {
      slot: 1,
      type: {
        name: 'water',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },
    {
      slot: 1,
      type: {
        name: 'rock',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },
    {
      slot: 1,
      type: {
        name: 'normal',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },
    {
      slot: 1,
      type: {
        name: 'fire',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },
    {
      slot: 1,
      type: {
        name: 'ice',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },

    {
      slot: 1,
      type: {
        name: 'rock',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },
    {
      slot: 1,
      type: {
        name: 'water',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },
  ],
};

export const UnknownType = Template.bind({});
UnknownType.args = {};
