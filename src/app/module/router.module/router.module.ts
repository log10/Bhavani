import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from '../../component/landing-page.component/landing-page.component';
import { GridViewComponent } from '../../component/grid-view.component/grid-view.component';
import { ReaderComponent } from '../../component/reader.component/reader.component';
import { ReaderContentComponent } from '../../component/reader-content.component/reader-content.component';

const appRoutes: Routes = [
  {
    path: 'story/:name',
    component: ReaderComponent,
    children: [
      { path: ':view/:page', component: ReaderContentComponent },
      { path: '', redirectTo: 'normal/1', pathMatch: 'full' }
    ]
  },
  { path: 'home', component: LandingPageComponent },
  { path: 'short-stories', component: GridViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
