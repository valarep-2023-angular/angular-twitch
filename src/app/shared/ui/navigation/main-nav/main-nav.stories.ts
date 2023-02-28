import { Meta, moduleMetadata, Story } from '@storybook/angular';

import {MainNavComponent} from "./main-nav.component";
import {MainNavItemComponent} from "../main-nav-item/main-nav-item.component";

export default {
  title: 'Navigation/MainNav',
  component: MainNavComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        MainNavItemComponent
      ],
      imports: [],
    })
  ]
} as Meta<MainNavComponent>;

const Template: Story = (args) => ({
  props: args,
  template: `
    <app-main-nav>
      <app-main-nav-item text="Home" link="/" [isCurrent]="true"></app-main-nav-item>
      <app-main-nav-item text="About" link="/about" [isCurrent]="false"></app-main-nav-item>
      <app-main-nav-item text="Contact" link="/contact" [isCurrent]="false"></app-main-nav-item>
    </app-main-nav>
  `
});

export const Basic = Template.bind({});

