import { Action, createReducer, on } from '@ngrx/store';
import {  postStateInterface } from '../../models/post.interface';
import { postActionType } from '../actions/post.actions';

export const initialState: postStateInterface = {
    post:[],
    loading:false,
    error:null,
};

export const postReducer = createReducer(initialState,
        
        on(
            postActionType.postListRequest,
            (state): postStateInterface => ({
            ...state,
            loading:true
            })
        ),
        on(
            postActionType.postSucess,
            (state,post): postStateInterface => ({
            ...state,
            loading:false,
            post:post.post
            
            })
        ),
        
    
    );
   