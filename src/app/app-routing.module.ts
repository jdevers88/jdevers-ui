import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeakerDesignerComponent } from './components/speaker-designer/speaker-designer.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {path: 'speaker-designer', component: SpeakerDesignerComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
