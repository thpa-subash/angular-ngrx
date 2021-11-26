import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable,Subscription } from 'rxjs';
import { postInterface, postStateInterface } from '../models/post.interface';
import { postActionType, postListRequest } from '../store/actions/post.actions';
import { isloadingSelector, postSelector } from '../store/selectors/selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  loading$: Observable<boolean> | undefined;
  data$:Observable<postInterface[]> | undefined;
  constructor(private store:Store<postStateInterface>) {
  
   }

  ngOnInit(): void {
    this.initializeValues();
  }
initializeValues():void{
  this.store.dispatch(postActionType.postListRequest());

  this.loading$=this.store.pipe(select(isloadingSelector));
  this.data$=this.store.pipe(select(postSelector));

}
}
