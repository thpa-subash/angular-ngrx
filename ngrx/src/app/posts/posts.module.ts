import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { postReducer } from './store/reducers/post.reducer';
import { StoreModule } from '@ngrx/store';
import { PostDetailsComponent } from './post-details/post-details.component';


const routes:Routes=[
  {path:'posts', component:PostComponent},
  {path:'posts/:id',component:PostDetailsComponent}
];

@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('post',postReducer)
  ],
  exports:[
    PostComponent,
  ]
})
export class PostsModule { }
