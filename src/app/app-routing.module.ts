import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { VisualsComponent } from './visuals/visuals.component';

const routes: Routes = [
  {
    component: AboutComponent,
    path: '',

  },
  {
    component: CvComponent,
    path: 'cv'
  },
  {
    component: ProjectsComponent,
    path: 'projects'
  },
  {
    component:VisualsComponent,
    path:'visuals'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
