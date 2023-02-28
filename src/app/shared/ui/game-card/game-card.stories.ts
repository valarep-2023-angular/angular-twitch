import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {GameCardComponent} from "./game-card.component";
import {TagComponent} from "../tag/tag.component";

export default {
  title: 'Basics/Game card',
  component: GameCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        TagComponent
      ],
      imports: [],
    })
  ],
  args: {
    image:"https://static-cdn.jtvnw.net/ttv-boxart/1095275650_IGDB-285x380.jpg",
    title: "Game title"
  }
} as Meta<GameCardComponent>;

const basicTemplate: Story = (args) => ({
  props: args,
  template: `
    <div class="p-6">
      <div role="list" class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8">
            <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"></app-game-card>
      </div>
    </div>
  `,
});

export const Basic = basicTemplate.bind({});

const fullExampleTemplate: Story = (args) => ({
  props: args,
  template: `
      <div class="bg-gray-900 py-1">
          <div class="px-6">

            <div role="list" class="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8">

                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/15229_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/1095275650_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/515479_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/505963_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/313558_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/513143-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/490100-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/18122-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/29452_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/1788326126_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/116747788-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/417752-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/417528_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/19619_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/513181_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/15229_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/1095275650_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/515479_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/505963_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/313558_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/513143-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/490100-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/18122-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/29452_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/1788326126_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/116747788-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/417752-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/417528_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/19619_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/513181_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/15229_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/1095275650_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/515479_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/505963_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/313558_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/513143-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/490100-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/18122-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/29452_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/1788326126_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/116747788-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/417752-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/417528_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/19619_IGDB-285x380.jpg"></app-game-card>
                <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" [title]="title" image="https://static-cdn.jtvnw.net/ttv-boxart/513181_IGDB-285x380.jpg"></app-game-card>
            </div>
          </div>
        </div>
  `,
});

export const FullExample = fullExampleTemplate.bind({});
