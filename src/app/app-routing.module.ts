import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentLayoutComponent } from '@layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('@features/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () => import('@features/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('@features/auth/auth.module').then(m => m.AuthModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
