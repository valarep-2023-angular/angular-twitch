import {VideoPlayerComponent} from "./video-player.component";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";

export default {
  title: 'Basics/Video-Player',
  component: VideoPlayerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NgHeroiconsModule
      ],
    })
  ],
  args: {
  }
} as Meta<VideoPlayerComponent>;

const baseTemplate: Story = (args) => ({
  props: args,
});

export const VideoPlayer = baseTemplate.bind({});



