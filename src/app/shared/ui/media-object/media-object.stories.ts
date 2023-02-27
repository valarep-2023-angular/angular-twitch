import { Meta, moduleMetadata, Story } from '@storybook/angular';


import { MediaObjectComponent } from './media-object.component';

export default {
  title: 'Basics/Media object',
  component: MediaObjectComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
  args: {
    image:"https://static-cdn.jtvnw.net/jtv_user_pictures/7e03390b-82d1-44e8-a4b5-c895475b2f43-profile_image-70x70.png",
    title:"Lyelz",
    subtitle:"Ragnarok Online",
    amount:"35"
  }
} as Meta<MediaObjectComponent>;

const Template: Story = (args) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  image:"https://static-cdn.jtvnw.net/jtv_user_pictures/7e03390b-82d1-44e8-a4b5-c895475b2f43-profile_image-70x70.png",
  title:"Lyelz",
  subtitle:"Ragnarok Online",
  amount:"35"
}
