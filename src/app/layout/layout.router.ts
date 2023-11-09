import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: `home`,
      //   pathMatch: 'full'
      // },
      // {
      //   path: `home`,
      //   loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      // },
      {
        path: `branch`,
        loadChildren: () => import('../branch/branch.module').then(m => m.BranchModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
