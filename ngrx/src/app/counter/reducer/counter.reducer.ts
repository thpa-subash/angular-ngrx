import { createReducer, on } from "@ngrx/store";
import { decrementAction, incrementAction, resetAction } from "../action/counterAction";
import { counterInterface } from "../model/counter.interface";

export const initialState:counterInterface={
    score:10
}
export const counterReducer = createReducer(
    initialState,
    on(incrementAction, state => ({
        ...state,
        score:state.score + 1,
    })),
    on(decrementAction, state => ({
        ...state,
        score:state.score - 1, 
    })),
    on(resetAction, state => ({
        ...state,
        score:0,
    })),
   
  );