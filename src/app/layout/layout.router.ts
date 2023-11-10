import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { MoreComponent } from './more/more.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: `home`,
        pathMatch: 'full'
      },
      {
        path: `home`,
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: `branch`,
        loadChildren: () => import('../branch/branch.module').then(m => m.BranchModule)
      },
      {
        path: `posts`,
        loadChildren: () => import('../posts/posts.module').then(m => m.PostsModule)
      },
      {
        path: `about-us`,
        component: AboutUsComponent
      },
      {
        path: `contact`,
        component: ContactComponent
      },
      {
        path: `more`,
        component: MoreComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
