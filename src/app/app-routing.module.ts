import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth/utils/auth.guard";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'games'},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule), canActivate: [AuthGuard]},
  {path: 'streams', loadChildren: () => import('./streams/streams.module').then(m => m.StreamsModule), canActivate: [AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'games'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
