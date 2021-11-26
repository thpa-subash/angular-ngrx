import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { postStateInterface } from '../../models/post.interface';
import { PostServiceService } from '../../services/post-service.service';
import { postActionType } from '../actions/post.actions';
import { postReducer } from '../reducers/post.reducer';
import { postInterface } from '../../models/post.interface';
@Injectable()
export class postEffects {

    loadCustomers$ = createEffect(() => 
        this.actions$.pipe(
          // filter out the actions, except for `[Customers Page] Opened`
          ofType(postActionType.postListRequest),
        mergeMap(() =>
            // call the service
            this.postService.getPostList().pipe(
              // return a Success action when the HTTP request was successfull (`[Customers Api] Load Sucess`)
              map((post:postInterface[]) => postActionType.postSucess({post:post})),
              // return a Failed action when something went wrong during the HTTP request (`[Customers Api] Load Failed`)
              catchError((error) => of(postActionType.postFailed())),
            ),
          ),
        )
      );

  constructor(
    private actions$: Actions,
    private postService: PostServiceService
  ) {}
}