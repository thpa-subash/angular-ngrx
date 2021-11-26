import { createFeatureSelector, createSelector } from "@ngrx/store"
import { postStateInterface } from "../../models/post.interface";

export const postFeatureSelector = createFeatureSelector<postStateInterface>('post');

export const isloadingSelector = createSelector(
postFeatureSelector,(postState:postStateInterface)=>postState.loading
);
export const postSelector = createSelector(
    postFeatureSelector,(postState:postStateInterface)=>postState.post
    );
    export const iserror = createSelector(
        postFeatureSelector,(postState:postStateInterface)=>postState.error
        );