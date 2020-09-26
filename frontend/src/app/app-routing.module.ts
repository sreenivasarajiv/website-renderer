import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteListComponent } from './website-list/website-list.component';
import { WebsiteViewComponent } from './website-view/website-view.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteListComponent
  },
  {
    path: 'view/:websiteName',
    component: WebsiteViewComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
