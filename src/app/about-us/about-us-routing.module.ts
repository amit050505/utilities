import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    MatButtonModule],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }