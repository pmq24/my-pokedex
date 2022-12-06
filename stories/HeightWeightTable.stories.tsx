import type { Meta, StoryFn } from '@storybook/react';
import HeightWeightTable, {
  type Props,
} from '../app/components/height-weight-table';

export default {
  title: 'HeightWeightTable',
  component: HeightWeightTable,
  parameters: {
    docs: {
      description: {
        component: 'Displays height and weight of a Pokemon',
      },
    },
  },
} as Meta;

const Template: StoryFn<Props> = (args) => <HeightWeightTable {...args} />;

export const Example = Template.bind({});
Example.args = {
  height: 3.5,
  weight: 350,
};
