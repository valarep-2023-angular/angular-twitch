import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";
import {TagComponent} from "./tag.component";

export default {
  title: 'Basics/Tag',
  component: TagComponent,
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
    text: 'This is a tag',
  }
} as Meta<TagComponent>;

const baseTemplate: Story = (args) => ({
  template: `
    <div class="flex p-6 bg-gray-900">
      <app-tag>{{text}}</app-tag>
    </div>
  `,
  props: args,
});

export const Basic = baseTemplate.bind({});
