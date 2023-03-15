import { Meta, moduleMetadata, Story } from '@storybook/angular';


import { ChatRoomComponent } from './chat-room.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import { ChatUrlPipe } from '../../utils/pipes/chat-url/chat-url.pipe';

export default {
  title: 'Basics/Chat',
  component: ChatRoomComponent,
  decorators: [
    moduleMetadata({
    declarations:[
        ChatUrlPipe
    ],
      imports: [
        BrowserAnimationsModule,
        CommonModule
      ],
    })
  ],
  args:{streamer:"GoBGG"}

} as Meta<ChatRoomComponent>;

const baseTemplate: Story = (args) => ({
  props: args,
});

export const Default = baseTemplate.bind({});
