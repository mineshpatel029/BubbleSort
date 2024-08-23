import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { VisualizerComponent } from './visualizer/visualizer.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'visualizer', component: VisualizerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
