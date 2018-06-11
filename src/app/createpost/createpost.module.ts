import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostHomeComponent } from './post-home/post-home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostListComponent, PostDetailComponent, PostHomeComponent]
})
export class CreatepostModule { }
