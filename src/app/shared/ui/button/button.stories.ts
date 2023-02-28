import { Meta, moduleMetadata, Story } from '@storybook/angular';


import { ButtonComponent } from './button.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";

export default {
  title: 'Basics/Buttons',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        NgHeroiconsModule
      ],
    })
  ],
  args: {
    text: 'Button',
  }
} as Meta<ButtonComponent>;

const baseTemplate: Story = (args) => ({
  template: `
    <div class="p-6 bg-gray-900">
      <app-button>{{text}}</app-button>
    </div>
  `,
  props: args,
});

export const Primary = baseTemplate.bind({});

const withIconTemplate: Story = (args) => ({
  template: `
    <div class="p-6 bg-gray-900">

      <app-button>
        <heart-outline-icon class="mr-2"/>
        <span>{{text}}</span>
      </app-button>

    </div>
  `,
  props: args,
});

export const WithIcon = withIconTemplate.bind({});

