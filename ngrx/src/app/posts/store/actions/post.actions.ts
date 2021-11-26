import { createAction, props } from '@ngrx/store';
import { postInterface } from '../../models/post.interface';

export const postListRequest = createAction(
  '[Post Page] Post',
  
);
export const  postSucess= createAction(
    '[Post Page] Post Succes',
    props<{post:postInterface[]}>()

);
export const  postFailed= createAction(
    '[Post Page] Post Failed',
);

export const postDetailsRequest=createAction(
  '[Post Details] PostDetails',
);
export const  postDetailsSucess= createAction(
  '[Post Details] PostDetails Succes',
  props<{post:postInterface}>()

);
export const  postDetailsFailed= createAction(
  '[Post Details] PostDetails Failed',
);
export const postActionType={
  postListRequest,
  postSucess,
  postFailed,
  postDetailsRequest,
  postDetailsSucess,
  postDetailsFailed,
  
}