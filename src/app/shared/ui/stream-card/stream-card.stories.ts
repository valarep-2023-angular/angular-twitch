import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {StreamCardComponent} from "./stream-card.component";
import {TagComponent} from "../tag/tag.component";

export default {
  title: 'Basics/Stream card',
  component: StreamCardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [
        TagComponent
      ],
    })
  ],
  args: {
    image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_meloniemac-440x248.jpg',
    title: 'Ura biggit harry [Hard/ Hufflepuff]',
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1a9da63c-0934-452e-9360-13e2c4f23799-profile_image-50x50.png',
    streamer: 'MelonieMac',
    game: 'Hogwarts Legacy',
    tags: ['Christian'],
    viewers: 50
  }
} as Meta<StreamCardComponent>;

const basicTemplate: Story = (args) => ({
  props: args,
  template: `
    <div class="p-6">
      <div role="list" class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
            <app-stream-card
               [image]="image"
               [title]="title"
               [avatar]="avatar"
               [streamer]="streamer"
               [game]="game"
               [tags]="tags"
               [viewers]="viewers"
             />
      </div>
    </div>
  `,
});

export const Basic = basicTemplate.bind({});

