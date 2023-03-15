import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth/utils/auth.guard";

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard], pathMatch: 'full'},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'directory', loadChildren: () => import('./directory/directory.module').then(m => m.DirectoryModule), canActivate: [AuthGuard]},
  {path: ':streamerName', loadChildren: () => import('./streamer/streamer.module').then(m => m.StreamerModule), canActivate: [AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
