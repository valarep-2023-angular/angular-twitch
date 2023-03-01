import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {GameDetailsCardComponent} from "./game-details-card.component";
import {ButtonComponent} from "../button/button.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";
import {TagComponent} from "../tag/tag.component";
import {RouterTestingModule} from "@angular/router/testing";

export default {
  title: 'Basics/Game details card',
  component: GameDetailsCardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        NgHeroiconsModule,
        RouterTestingModule
      ],
      declarations: [
        ButtonComponent,
        TagComponent
      ],
    })
  ],
  args: {
    game: {
      title: 'Sons of the Forest',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/515479_IGDB-144x192.jpg',
      viewers: '50',
      followers: 150,
      tags: ['tag1', 'tag2']
    }
  }
} as Meta<GameDetailsCardComponent>;

const basicTemplate: Story = (args) => ({
  props: args,
  template: `
    <div class="p-6 bg-gray-900">
      <app-game-details-card
          [image]="game.image"
          [title]="game.title"
          [viewers]="game.viewers"
          [followers]="game.followers"
          [tags]="game.tags"
        />
    </div>
  `,
});

export const Basic = basicTemplate.bind({});

