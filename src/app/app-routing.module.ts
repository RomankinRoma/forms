import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Partt2Component} from './partt2/partt2.component';

const routes: Routes = [
  {path: 'part2', component: Partt2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
