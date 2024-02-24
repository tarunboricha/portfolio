import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';

const routes: Routes = [
  {
    component: AboutComponent,
    path: '',

  },
  {
    component: CvComponent,
    path: 'cv'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
