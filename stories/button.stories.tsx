import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import Button from '../app/components/button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    variant: {
      type: 'string',
      values: ['ghost', 'link', 'outline'],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'Button',
};

export const VariantOutline = Template.bind({});
VariantOutline.args = {
  variant: 'outline',
  children: 'Button',
};

export const VariantGhost = Template.bind({});
VariantGhost.args = {
  variant: 'ghost',
  children: 'Button',
};

export const VariantLink = Template.bind({});
VariantLink.args = {
  variant: 'link',
  children: 'Button',
};

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
  color: 'primary',
  children: 'Button',
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
  color: 'secondary',
  children: 'Button',
};

export const ColorAccent = Template.bind({});
ColorAccent.args = {
  color: 'accent',
  children: 'Button',
};

export const ColorInfo = Template.bind({});
ColorInfo.args = {
  color: 'info',
  children: 'Button',
};

export const ColorSucces = Template.bind({});
ColorSucces.args = {
  color: 'success',
  children: 'Button',
};

export const ColorWarning = Template.bind({});
ColorWarning.args = {
  color: 'warning',
  children: 'Button',
};

export const ColorError = Template.bind({});
ColorError.args = {
  color: 'error',
  children: 'Button',
};

export const SizeLg = Template.bind({});
SizeLg.args = {
  size: 'lg',
  children: 'Button',
};

export const SizeMd = Template.bind({});
SizeMd.args = {
  size: 'md',
  children: 'Button',
};

export const SizeSm = Template.bind({});
SizeSm.args = {
  size: 'sm',
  children: 'Button',
};

export const SizeXs = Template.bind({});
SizeXs.args = {
  size: 'xs',
  children: 'Button',
};

export const Combination = Template.bind({});
Combination.args = {
  color: 'success',
  size: 'lg',
  variant: 'outline',
  children: 'Button',
};
