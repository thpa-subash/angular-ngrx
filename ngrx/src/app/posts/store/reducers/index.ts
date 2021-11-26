import { ActionReducerMap } from "@ngrx/store";
import { postStateInterface } from "../../models/post.interface";
import { postReducer } from "./post.reducer";

export interface postReducerState{
    post:postStateInterface
}
export const rootReducer:ActionReducerMap<postReducerState>={
    post:postReducer
};