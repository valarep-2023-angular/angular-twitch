import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {TagComponent} from "../tag/tag.component";
import {ClipCardComponent} from "./clip-card.component";

export default {
  title: 'Basics/Clip card',
  component: ClipCardComponent,
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
    duration: '01:23',
    createdAt: '2 jours',
    views: '10k',
    author: 'EvyGames'
  }
} as Meta<ClipCardComponent>;

const basicTemplate: Story = (args) => ({
  props: args,
  template: `
    <div class="p-6">
      <div role="list" class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
            <app-clip-card
               [image]="image"
               [title]="title"
               [avatar]="avatar"
               [streamer]="streamer"
               [duration]="duration"
               [createdAt]="createdAt"
               [views]="views"
               [author]="author"
             />
      </div>
    </div>
  `,
});

export const Basic = basicTemplate.bind({});

