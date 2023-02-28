import {LayoutWithSideMenuComponent} from "./layout-with-side-menu.component";
import {moduleMetadata, Story} from "@storybook/angular";
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";
import {DesktopSideMenuContentComponent} from "./desktop-side-menu-content/desktop-side-menu-content.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MobileSideMenuContentComponent} from "./mobile-side-menu-content/mobile-side-menu-content.component";

export default {
  title: 'Layouts/With side menu',
  component: LayoutWithSideMenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        DesktopSideMenuContentComponent,
        MobileSideMenuContentComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        NgHeroiconsModule
      ],
    })
  ]
};

const baseTemplate: Story = (args) => ({
  props: args,
  template: `
    <app-layout-with-side-menu [title]="title">
        <app-desktop-side-menu-content>
            <!-- Any content-->
            <div class="px-4 text-white">
              <ul>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
              </ul>
            </div>
        </app-desktop-side-menu-content>
        <app-mobile-side-menu-content>
            <!-- Any content-->
            <div class="px-4 text-white">
              <ul>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
              </ul>
            </div>
        </app-mobile-side-menu-content>

        <!-- Any content-->
        <div class="p-4">
          <p>Main content</p>
        </div>
    </app-layout-with-side-menu>
  `
});

export const Basic = baseTemplate.bind({});
Basic.args = { title: 'Title' };

