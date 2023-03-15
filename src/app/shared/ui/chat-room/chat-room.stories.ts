import { Meta, moduleMetadata, Story } from '@storybook/angular';


import { ChatRoomComponent } from './chat-room.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";

export default {
  title: 'Basics/Chat',
  component: ChatRoomComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        CommonModule
      ],
    })
  ],
} as Meta<ChatRoomComponent>;

const baseTemplate: Story = (args) => ({
  template: `
      <app-chat-room></app-chat-room>
  `,
  props: args,
});

export const Default = baseTemplate.bind({});
