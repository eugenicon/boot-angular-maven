import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageComponent} from "./page/page.component";
import {AnchorPageComponent} from "./anchor-page/anchor-page.component";

const routes: Routes = [
  { path: 'page/next', component: PageComponent },
  { path: 'page/anchor', component: AnchorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
