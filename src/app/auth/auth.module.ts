import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthorizeComponent} from './feature/authorize/authorize.component';

@NgModule({
  declarations: [AuthorizeComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: []
})
export class AuthModule {
}
