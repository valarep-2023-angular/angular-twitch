import { Meta, moduleMetadata, Story } from '@storybook/angular';

import {TabsComponent} from "./tabs.component";

export default {
  title: 'Navigation/Tabs',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      declarations: [
      ],
      imports: [],
    })
  ]
} as Meta<TabsComponent>;

const Template: Story = (args) => ({
  props: args,
  template: `
    <app-tabs/>
  `
});

export const Basic = Template.bind({});

