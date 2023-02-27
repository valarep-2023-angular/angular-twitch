import { Meta, moduleMetadata, Story } from '@storybook/angular';


import { ButtonComponent } from './button.component';

export default {
  title: 'Basics/Buttons',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
  args: {
    text: 'Button',
  }
} as Meta<ButtonComponent>;

const Template: Story = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary',
}
