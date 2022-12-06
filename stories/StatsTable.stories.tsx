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
  stats: {
    hp: {
      base_stat: 100,
      effort: 0,
    },
    attack: {
      base_stat: 150,
      effort: 3,
    },
    defense: {
      base_stat: 140,
      effort: 0,
    },
    'special-attack': {
      base_stat: 100,
      effort: 0,
    },
    'special-defense': {
      base_stat: 90,
      effort: 0,
    },
  },
};
