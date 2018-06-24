import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from '../../component/landing-page.component/landing-page.component';
import { GridViewComponent } from '../../component/grid-view.component/grid-view.component';

const appRoutes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'short-stories', component: GridViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
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
