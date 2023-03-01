import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoadHomeContentComponent} from "./feature/load-home-content/load-home-content.component";

const routes: Routes = [
  {path: '', component: LoadHomeContentComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
