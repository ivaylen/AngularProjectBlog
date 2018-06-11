import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ShareModule } from '../share/share.module'

import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostHomeComponent } from './post-home/post-home.component';
import { BlogpostService } from './blogpost.service'

const routes: Routes = [
  { path: 'blog', component: PostListComponent },
  { path: 'blog/:id', component: PostDetailComponent },
  { path: 'home', component: PostHomeComponent },
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  declarations:
   [PostListComponent,
    PostDetailComponent,
    PostHomeComponent]
,
providers: [BlogpostService]})
export class CreatepostModule { }
