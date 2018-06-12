import { NgModule } from '@angular/core';


import { ShareModule } from '../share/share.module';

import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';

import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  { path: 'blog', component: PostListComponent },
  { path: 'blog/:id', component: PostDetailComponent },
  { path: 'dashboard', component: PostDashboardComponent },
]

@NgModule({
  imports: [ShareModule, RouterModule.forChild(routes)
  ],
  declarations: [PostDashboardComponent, PostDetailComponent, PostListComponent],
  providers: [PostService]
})
export class PostsModule { }
