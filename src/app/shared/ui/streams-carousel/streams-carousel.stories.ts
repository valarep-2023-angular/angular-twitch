import { Meta, moduleMetadata, Story } from '@storybook/angular';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";
import {StreamsCarouselComponent} from "./streams-carousel.component";
import {TagComponent} from "../tag/tag.component";

export default {
  title: 'Widgets/Carousels',
  component: StreamsCarouselComponent,
  decorators: [
    moduleMetadata({
      declarations: [TagComponent],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        NgHeroiconsModule
      ],
    })
  ],
  args: {

  }
} as Meta<StreamsCarouselComponent>;

const baseTemplate: Story = (args) => ({
  template: `
    <div class="p-6 bg-gray-900 flex justify-center">
      <app-streams-carousel/>
    </div>
  `,
  props: args,
});

export const Streams = baseTemplate.bind({});


