import type { Meta, StoryFn } from '@storybook/react';
import StatsTable, { type Props } from '../app/components/stats-table';

export default {
  title: 'StatsTable',
  component: StatsTable,
  parameters: {
    docs: {
      description: {
        component: 'Displays stats of a Pokemon (HP, Attack, Defense, ...)',
      },
    },
  },
  argTypes: {
    stats: {
      description: 'Stats of a Pokemon',
    },
  },
} as Meta;

const Template: StoryFn<Props> = (args) => <StatsTable {...args} />;

export const Example = Template.bind({});
Example.args = {
  stats: [
    {
      base_stat: 48,
      effort: 1,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
    {
      base_stat: 48,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      base_stat: 48,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      base_stat: 48,
      effort: 0,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 48,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 48,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
};
